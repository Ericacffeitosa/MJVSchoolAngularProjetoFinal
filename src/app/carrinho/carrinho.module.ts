import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './components/pages/carrinho/carrinho.component';




@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    CarrinhoComponent
  ]
})
export class CarrinhoModule { }
