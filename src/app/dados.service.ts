import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DadosService {

  
  constructor(public http: HttpClient) { 
     
  }
  pegaAnimais(){
      return this.http.get('http://fe2018noite-fronendinfnet.c9users.io:8081/animais');
  }
  salvaAnimal(x){
      return this.http.post('http://fe2018noite-fronendinfnet.c9users.io:8081/animais', x);
  }

}
