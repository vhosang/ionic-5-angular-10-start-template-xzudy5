import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  // resultado = confirm("Tem certeza disso?");

  produtos = [];
  carrinho = [];
  constructor() {}

  ionViewDidEnter() {
    this.produtos = JSON.parse(localStorage.getItem('produtos'));
  }

  addCart(produto) {
    var confirma = confirm("Deseja adicionar o produto ao seu carrinho?");
    if (confirma == false) {
      alert("O item será adicionado ao seu carrinho")
    }
    else{
      alert("O item não foi adicionado ao seu carrinho")
    }
    

    
    if (produto.quantidade == 0) {
      return;
    } else
    {
      let produtoCarrinho = {
        nome: produto.nome,
        imagem: produto.imagem,
        preco: produto.preco,
        quantidade: produto.quantidade,
     
      };
      console.log(this.produtos.indexOf(produto));
      this.carrinho.push(Object.assign({}, produtoCarrinho));
      produto.quantidade -= 1;
      // var confirma = confirm("Deseja adicionar o produto ao seu carrinho?");
      // if (confirma == false) {
      //   alert("O item será adicionado ao seu carrinho")
      // }
      // else{
      //   alert("O item não foi adicionado ao seu carrinho")
      // }
     
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
      localStorage.setItem('produtos', JSON.stringify(this.produtos));
    }
  }


  delete(produto) {
    
    var resultado = confirm("Deseja excluir o produto?");
    if (resultado == false) {
      
      alert("O item será excluído da lista!");    
  }
  else{
      alert("Você desistiu de excluir o produto!");
      
    this.produtos.splice(this.produtos.indexOf(produto), 1);
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
  }


}
}