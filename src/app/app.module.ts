import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DadosService } from './dados.service';

import { InicioComponent } from './inicio/inicio.component';
import { CadastroanimalComponent } from './cadastroanimal/cadastroanimal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CadastroanimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
