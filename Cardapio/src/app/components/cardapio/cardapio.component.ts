
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {
   @Input() pratos = [
    {
      imagem: "https://img.cybercook.com.br/imagens/receitas/619/massa-de-pizza-para-microondas-2.jpeg",
      titulo: "Pizza",
      endereco: "Avenida Josefa Taveira, 2376",
      cidade: "João Pessoa",
      telefone: "(83) 3268-6551"
    },
    {
      imagem: "https://img.itdg.com.br/tdg/images/recipes/000/000/876/324587/324587_original.jpg?mode=crop&width=710&height=400",
      titulo: "Lasanha",
      endereco: "Avenida Epitácio Pessoa, 712",
      cidade: "João Pessoa",
      telefone: "(83) 3267-0252"
    },
    {
      imagem: "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2017/08/tapioca-da-ana-maria.jpg",
      titulo: "Tapioca",
      endereco: "Parque Solón de Lucena, 123",
      cidade: "João Pessoa",
      telefone: "(83) 3494-9387"
    },
    {
      imagem: "https://revistamenu.com.br/wp-content/uploads/2021/08/hotdog-estudo-460x249.jpg",
      titulo: "Hot-Dog",
      endereco: "Parque Solón de Lucena, 123",
      cidade: "João Pessoa",
      telefone: "(83) 3494-9387"
    }
]


  constructor() { }

  ngOnInit(): void {
  }

}
