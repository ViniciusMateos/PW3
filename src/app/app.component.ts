import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-angular';


  obterAutor(){
    return "Rogério de Morais";
  }

  nome = 'Anderson';
  sobrenome = ' Silva';
  idade = '57';
  logo = "favicon.ico";

  nomeCompleto(){
    return this.nome + this.sobrenome;
  }


}
