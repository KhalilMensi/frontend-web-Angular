import { Component, OnInit } from '@angular/core';
import { UserSignIn, userSignUp } from '../data/userSettings';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  originalStudentSignIn: UserSignIn = {
    email: null,
    password: null
  };
  originalStudentSignUp: userSignUp = {
    name: null,
    email: null,
    password: null,
    repassword:null
  }

  studentSignUp: userSignUp = {...this.originalStudentSignUp};
  studentSignIn: UserSignIn = {...this.originalStudentSignIn};
  constructor(private studentService: EtudiantService) { }

  submitted = false;
  ngOnInit(): void {
    this.submitted = false;
  }

  saveStudent(saveStudent) {
    this.originalStudentSignUp.name = this.studentSignUp.name;
    this.originalStudentSignUp.email = this.studentSignUp.email;
    this.originalStudentSignUp.password = this.studentSignUp.password;
    this.originalStudentSignUp.repassword = this.studentSignUp.repassword;
    this.submitted = true; 
    this.save();
  }

  save() {
    this.studentService.createStudent(this.originalStudentSignUp).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );  

  }

}
