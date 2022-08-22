import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho/services/carrinho.service';
import { Curso } from '../../model/curso.model';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-listas-cursos',
  templateUrl: './listas-cursos.component.html',
  styleUrls: ['./listas-cursos.component.scss']
})
export class ListasCursosComponent implements OnInit {

titulo:String= "Conheça nossos cursos.";

cursos: Array<Curso> = this.cursosService.getCursos();

  constructor(
    private cursosService:CursosService,
    private router: Router,
    private carrinhoService: CarrinhoService 
  ) {}

  ngOnInit(): void {
  }
  
  exibirDetalhe(id: number) {
    this.router.navigateByUrl(`curso-detalhes/${id}`)
  }
  
  addCarrinho(curso: Curso) {
    this.carrinhoService.addItem(curso);
    this.router.navigateByUrl('carrinho')
  }
}