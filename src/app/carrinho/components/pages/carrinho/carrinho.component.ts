import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/carrinho/services/carrinho.service';
import { Curso } from 'src/app/cursos/model/curso.model';

@Component({
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  titulo:String= "Carrinho de compras";
  itens: Curso[] = this.carrinhoService.getItens();

  valorTotal () {
    var soma = 0;
    for (let  i=0; i < this.itens.length; i++) {
      soma += this.itens[i].preco;
    } 
    console.log(soma);
    return soma;
  }

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
  }

  limparCarrinho(){
    this.carrinhoService.limparCarrinho();
    this.itens = this.carrinhoService.getItens();
  }

  excluirItem(item:Curso) {
    this.carrinhoService.excluirItem(item);
    this.itens = this.carrinhoService.getItens();
  }

}
