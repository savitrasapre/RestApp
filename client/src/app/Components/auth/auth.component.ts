import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router ) { }

  email : String;

  ngOnInit() {
  }

  login()
  {
    this.authService.loginUser(this.email).subscribe(data => {
      this.router.navigate(['user',data._id,'boards']);
    });
  }

}
