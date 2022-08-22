import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho/services/carrinho.service';
import { Curso } from '../../model/curso.model';
import { CursosService } from '../../services/cursos.service';

@Component({
  templateUrl: './detalhes-page.component.html',
  styleUrls: ['./detalhes-page.component.scss']
})
export class DetalhesPageComponent implements OnInit {

  curso?:Curso;

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private cursosService: CursosService,
    private carrinhoService: CarrinhoService)
 { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['id']);
      this.curso = this.cursosService.getById(id);
    });
  }

  addCarrinho() {
    if (this.curso != null) {
      this.carrinhoService.addItem(this.curso);
      this.router.navigateByUrl('carrinho')
    }
  }
}