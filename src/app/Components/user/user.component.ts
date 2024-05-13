import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomDirective } from '../../Directives/custom.directive';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, CustomDirective, HttpClientModule],
  providers:[UsersService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() oneUser:any;
}
