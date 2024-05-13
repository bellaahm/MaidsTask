import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CustomDirective } from '../../Directives/custom.directive';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HttpClientModule,RouterModule,CustomDirective],
  providers:[UsersService],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  ID:any;
  User: any;
  sUser: any;
  constructor(myActivated: ActivatedRoute, private userServ: UsersService) {
    this.ID = myActivated.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.userServ.getUserByID(this.ID).subscribe({
      next:(data)=>{
        console.log(data)
        this.User = data;
        this.sUser = this.User.data
        console.log(this.sUser);
      },
      error:(err)=>{console.log(err)}
    });
  }
}
