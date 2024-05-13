import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../Services/users.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,UserComponent],
  providers:[UsersService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  userId: any;
  User: any;
  Users: any = [];
  sUser: any;
  constructor(private userService: UsersService, private router: Router) { }
  searchUser(): void {
    setTimeout(() => { 
      if (this.userId) {
        this.userService.searchUserById(this.userId)
          .subscribe(user => {
          this.User = user;
          this.sUser = this.User.data
            if (this.sUser) {
              this.router.navigate(['/users', this.sUser.id]);
            }
            else {
              alert('No Such user exists');
              console.log(this.User);
            }
          });
      }
    },500)
  }

}
