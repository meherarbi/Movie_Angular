import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnimationDurations } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { movie } from 'src/app/models/movie';
import { ListmovieService } from 'src/app/service/listmovie.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  ListmovieService: any;
  route: any;
  form: any;



  constructor(private backend: ListmovieService,private router: Router) { }

  m: movie = new movie ("1", "test", '', "","","");

  movie: movie[] = [];
  movies = {
    id:"",
    title: "",
    description: "",
    genre: "",
    date: "",
    url:""
  };
  submitted = false;




  ngOnInit(): void {
    this.backend.getMovie().subscribe(
      response => {
        this.movie = response;

      }
    );


  }

  save(form:NgForm) {

    alert("Vous avez ajouté "+this.m.title+" avec succès !");

    console.log(this.m.title);

     console.log(form.value);


    this.submitted = true;
    this.backend.saveMovie(this.m)
    this.movies.id = this.form.value.id;
    this.movies.title = this.form.value.title;
    this.movies.description = this.form.value.description;
    this.movies.genre = this.form.value.genre;
    this.movies.date = this.form.value.date;
    this.movies.url = this.form.value.url;
    this.router.navigateByUrl('all')




  }


}
