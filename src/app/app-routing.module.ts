import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/components/pages/carrinho/carrinho.component';
import { DetalhesPageComponent } from './cursos/pages/detalhes-page/detalhes-page.component';
import { HomeComponent } from './cursos/pages/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'cursos', component:HomeComponent},
  {path: 'carrinho', component:CarrinhoComponent},
  {path: 'curso-detalhes/:id', component:DetalhesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
