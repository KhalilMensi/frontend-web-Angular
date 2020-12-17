import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CoursComponent } from './cours/cours.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'Home' , component : HomeComponent },
  { path: 'Enseignant' , component : EnseignantComponent },
  { path: 'Etudiant' , component : EtudiantComponent },
  { path: 'Cours' , component : CoursComponent },
  { path: 'About' , component : AboutComponent },
  { path: '' , component : HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
