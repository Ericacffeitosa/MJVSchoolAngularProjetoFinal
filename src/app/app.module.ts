import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { CursosModule } from './cursos/curso.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CursosModule,
    CarrinhoModule,
    BrowserAnimationsModule
  ],
  providers: [
   {
    provide: LOCALE_ID,
      useValue: "pt-BR"
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
