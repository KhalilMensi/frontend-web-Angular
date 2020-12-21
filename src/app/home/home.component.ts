import { Component, OnInit } from '@angular/core';
import { AdministratorService } from '../administrator.service';
import { UserSignIn, userSignUp } from '../data/userSettings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  originalUserSignIn: UserSignIn = {
    email: null,
    password: null,
  };

  userSignIn: UserSignIn = { ...this.originalUserSignIn };

  constructor(private administratorService: AdministratorService) {}

  ngOnInit(): void {}
  
  onSubmit() {
    console.log(this.userSignIn);
  }
}
