import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private DB_URL = "https://reqres.in/api/users"

  constructor(private http: HttpClient, private cacheService: CacheService) { }
  getAllUsers(page: number) { 
    return this.http.get(`https://reqres.in/api/users?page=${page}`)
  }
  
  getUserByID(id: any): Observable<User>{
    const cachedUser = this.cacheService.get(`user_${id}`);
    if (cachedUser) {
      return new Observable(observer => observer.next(cachedUser));
    } else {
      return this.http.get<User>(`${this.DB_URL}/${id}`);
    }
    // return this.http.get(`${this.DB_URL}/${id}`);
  }

  searchUserById(id: any) {
    return this.http.get(`${this.DB_URL}/${id}`);
  }
}
