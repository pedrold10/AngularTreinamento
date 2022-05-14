import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {
  @Input() imagem = "https://img.cybercook.com.br/imagens/receitas/619/massa-de-pizza-para-microondas-2.jpeg";
  @Input() titulo = "Pizza";
  @Input() endereco = "Rua da Areia, 666";
  @Input() cidade = "João Pessoa";
  @Input() telefone = "(011) 4002-8922";
  
  constructor() { }

  ngOnInit(): void {
  }

}
