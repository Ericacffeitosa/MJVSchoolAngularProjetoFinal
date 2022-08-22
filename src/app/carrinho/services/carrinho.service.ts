import { Injectable } from '@angular/core';
import { Curso } from 'src/app/cursos/model/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }
  
  addItem (curso: Curso) {
    let itens = this.getItens();
    if (itens.filter(obj => { return obj.id == curso.id}).length == 0) {
      itens.push(curso);
      localStorage.setItem('carrinho', JSON.stringify(itens));
    };
  }

  getItens() {
    let itens:Curso[] = [];
    let tmp : string|null = localStorage.getItem('carrinho');
    if (tmp != null) {
      itens = JSON.parse(tmp);
    }
    return itens;
  }

  limparCarrinho() {
    localStorage.removeItem('carrinho');
  }

  excluirItem(item:Curso){
    let itens = this.getItens().filter(obj => { return obj.id != item.id});
    localStorage.setItem('carrinho', JSON.stringify(itens));
  }
}
