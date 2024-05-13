import { Routes } from '@angular/router';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UserComponent } from './Components/user/user.component';

export const routes: Routes = [
    { path: "", redirectTo: "users", pathMatch: "full" },
    { path: "users", component: UsersComponent },
    { path: "userDetails", component: UserDetailsComponent },
    {path:"users/:id",component:UserDetailsComponent},
    {path:"user/:id",component:UserComponent},
];
