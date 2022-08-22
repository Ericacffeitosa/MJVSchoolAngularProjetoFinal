import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasCursosComponent } from './components/listas-cursos/listas-cursos.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesPageComponent } from './pages/detalhes-page/detalhes-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ListasCursosComponent,
    HomeComponent,
    DetalhesPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class CursosModule { }
