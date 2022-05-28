import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-novidade',
  templateUrl: './novidade.component.html',
  styleUrls: ['./novidade.component.scss']
})
export class NovidadeComponent implements OnInit {
  @Input() novidades = [
    {
      imagem: "https://s01.video.glbimg.com/x240/10574968.jpg",
      titulo: "Mega Burguer",
      endereco: "Avenida Pedro II, 2376",
      cidade: "João Pessoa",
      telefone: "(83) 3268-6551"
    },
    {
      imagem: "http://riodeboasnoticias.com.br/wp-content/uploads/2018/08/Coxinha-feira-podrao.jpg",
      titulo: "Coxinha",
      endereco: "Avenida Pedro II, 2376",
      cidade: "João Pessoa",
      telefone: "(83) 3268-6551"
    },
    {
      imagem: "https://guiadopastel.com.br/wp-content/uploads/2020/04/4-receitas-de-massa-de-pastel-dourado-1200x840.jpg",
      titulo: "Pastel",
      endereco: "Avenida Pedro II, 2376",
      cidade: "João Pessoa",
      telefone: "(83) 3268-6551"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
