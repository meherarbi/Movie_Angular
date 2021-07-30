import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  defaultSection = 'dmwm';
  myComment = 'Rien à signaler...';
  acc = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }



  onLogin(f: any) {
    this.loginService.login(f.value).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('mytoken', response['token']);

        this.router.navigateByUrl('');
      },
      (error) => {
        console.log(error);
        this.acc = true;
        f.reset();
      }
    );
  }

}
