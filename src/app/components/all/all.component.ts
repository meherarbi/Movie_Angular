import { ConfirmationService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movie } from 'src/app/models/movie';
import { ListmovieService } from 'src/app/service/listmovie.service';




@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  m: movie = new movie("1", "", '', "", "", "");
  mv: movie ;
  movies: movie[];
  movie: movie[] = [];



  constructor(private backend: ListmovieService, private router: Router) { }

  ngOnInit(): void {
    this.backend.getMovie().subscribe(
      r => this.movie = r
    )
    this.getMovies();


  }




  getMovies() {
    this.backend.getMovies().subscribe(
      (s) => {
        var result = Object.entries(s);
        result.map((x, y) => y);
        console.log("now")
        console.log(result)

        result.forEach((j) => {
          console.log(j[1])
          this.movie.push(j[1])
        })



      })
  }

  deleteMovie(mv:movie) {
    if (confirm('Are you sure you want to delete')) {
      this.backend.DeleteMovies(this.mv).subscribe((s) => {
        this.movies = this.movies.filter(m => m.id !== mv.id)
        console.log('delete')
      });


    }

  }






}
