import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
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
    id: null,
    firstName: null,
    lastName: null,
    emailId: null,
    password: null,
  }

  studentSignUp: userSignUp = {...this.originalStudentSignUp};
  studentSignIn: UserSignIn = {...this.originalStudentSignIn};
  constructor(private studentService: EtudiantService) { }
  student: UserSignIn = null;
  ngOnInit(): void {

  }
  saveStudent() {
    this.studentService.createStudent(this.studentSignUp).subscribe(data => {
      console.log(data)
    },
      error => console.log(error)
    )
  }
 
  onSubmit() {
    console.log(this.studentSignUp);
    this.saveStudent();
  }
  onSubmitLogin() {
    /*console.log(this.studentSignIn);
    this.getStudentByEmail(this.studentSignIn.email, this.studentSignIn.password);*/
    
  }
  getStudentByEmail(email: string,password: string) {
    return this.studentService.getStudent(this.studentSignIn).subscribe(data => {
      console.log(data)
    },
      error => console.log(error)
    )
  }
}
