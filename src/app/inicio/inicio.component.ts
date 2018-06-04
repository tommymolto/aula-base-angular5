import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [ DadosService]
})
export class InicioComponent implements OnInit {

  titulo = '';
  lista : any;
  constructor(public api: DadosService) { 
    this.titulo = 'Ola';
    //this.lista = this.api.dadosAnimais;
    this.api.pegaAnimais().subscribe( ret => {
      this.lista = ret;
    })
  }

  ngOnInit() {
  }
  vaiParaOLink(){
    console.log('clicou')
  }
}
