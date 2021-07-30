import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(identifiants) {
    return this.http.post('https://movie-d4aa1-default-rtdb.europe-west1.firebasedatabase.app/movie.json', identifiants);
  }
}
