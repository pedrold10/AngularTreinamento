import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { ListacardapiosComponent } from './components/listacardapios/listacardapios.component';
import { HomeComponent } from './pages/home/home.component';
import { TituloComponent } from './titulo/titulo.component';
import { ListNovidadesComponent } from './list-novidades/list-novidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardapioComponent,
    ListacardapiosComponent,
    HomeComponent,
    TituloComponent,
    ListNovidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
