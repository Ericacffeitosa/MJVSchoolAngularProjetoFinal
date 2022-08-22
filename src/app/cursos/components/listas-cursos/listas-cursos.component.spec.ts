import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasCursosComponent } from './listas-cursos.component';

describe('ListasCursosComponent', () => {
  let component: ListasCursosComponent;
  let fixture: ComponentFixture<ListasCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
