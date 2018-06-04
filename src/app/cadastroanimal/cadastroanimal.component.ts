import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cadastroanimal',
  templateUrl: './cadastroanimal.component.html',
  styleUrls: ['./cadastroanimal.component.css'],
  providers: [DadosService]
})
export class CadastroanimalComponent implements OnInit {

  animal = {
    nome:'Preencha o seu nome',
    descricao:'',
    telefone:'',
    imagem:''
  };
  constructor( public api: DadosService) { }

  ngOnInit() {
  }
  salva(){
    this.api.salvaAnimal(this.animal).subscribe(ret => {
      console.log('foi');
    },
    err => {
      console.log(err);
    })
  }
}
