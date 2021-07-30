import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ListmovieService {

  private movie: movie[] = [];
  movieSubject = new Subject<movie[]>();
  id!: number;
  HttpClientModule: any;

  listmovie:movie[]=[]

  constructor(private http: HttpClient,private router: Router) { }


  emitMovie() {
    this.movieSubject.next(this.movie.slice());
  }

  getMovie() {
    return this.http.get<any[]>(environment.movie_url);
  }



  saveMovie(movies: movie) {

    this.http
      .post('https://movie-d4aa1-default-rtdb.europe-west1.firebasedatabase.app/movie.json', movies)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
          this.router.navigateByUrl('all')
        },

        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );










  }

  getMovies() {
    return this.http.get<movie[]>('https://movie-d4aa1-default-rtdb.europe-west1.firebasedatabase.app//movie.json');

  }



  DeleteMovies(mv: movie):Observable<movie[]>{
    console.log("delete")
    return this.http.delete<movie[]>('https://movie-d4aa1-default-rtdb.europe-west1.firebasedatabase.app//movie.json'+mv)

  }



  /*DeleteMovies(p) {
    let i = this.listmovie.indexOf(p);
    this.listmovie.splice(i, 1);
  }*/

  findmoviebyid(id:any){
    return this.listmovie.find((p)=>p.id === id)
  }

  Updatemovie(p: movie){
    let i = this.listmovie.indexOf(p)
    this.listmovie[i]=p
  }
}
