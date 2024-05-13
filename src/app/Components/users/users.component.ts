import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CustomDirective } from '../../Directives/custom.directive';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    CustomDirective,
    FormsModule,
    CommonModule,
    SearchComponent,
    UserComponent,
    MatPaginatorModule,
  ],
  providers: [UsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(private userServ: UsersService) {}
  Users: any = [];
  currentPage: number = 1;
  perPage: number = 6;
  searchedID = null;
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userServ.getAllUsers(this.currentPage).subscribe((users) => {
      this.Users = users;
    });
  }

  onPageChanged(page: number): void {
    this.currentPage = page;
    this.loadUsers();
  }

}
