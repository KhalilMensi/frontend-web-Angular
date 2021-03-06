import { Component, OnInit } from '@angular/core';
import { UserSignIn, userSignUp } from '../data/userSettings';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css'],
})
export class EnseignantComponent implements OnInit {

  originalTeacherSignIn: UserSignIn = {
    email: null,
    password: null,
  };
  originalTeacherSignUp: userSignUp = {
    id: null,
    firstName: null,
    lastName: null,
    emailId: null,
    password: null,
  };

  teacherSignUp: userSignUp = { ...this.originalTeacherSignUp };
  teacherSignIn: UserSignIn = { ...this.originalTeacherSignIn };
  constructor() {}

  ngOnInit(): void {}
}
