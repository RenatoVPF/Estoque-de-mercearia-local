import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Produto ,} from '../modelo/Produto';
import { CommonModule , } from '@angular/common';
@Component({
  selector: 'app-cadastro-de-produtos',
  imports: [FormsModule, ReactiveFormsModule, CommonModule,],
  templateUrl: './cadastro-de-produtos.component.html',
  styleUrl: './cadastro-de-produtos.component.css'
})

export class CadastroDeProdutosComponent {

  visBtn : boolean = true;
  indice : number = -1;
  cadastro = new FormGroup({
    nomeProduto : new FormControl('', Validators.required),
    validadeProduto : new FormControl(null, Validators.required),
    valorProduto : new FormControl(null, Validators.required),
    quantidadeProduto : new FormControl(null, Validators.required),
    codigoBarraProduto: new FormControl('', Validators.required)
  })
  vetor:Produto[] = []


  cadastra(){
    this.vetor.push(this.cadastro.value as Produto)

    this.cadastro.reset();

    console.table(this.vetor)
  }
  selecionar(indice:number){
    this.indice = indice;

    this.cadastro.setValue({
      nomeProduto : this.vetor[indice].nomeProduto,
      validadeProduto : this.vetor[indice].validadeProduto,
      valorProduto : this.vetor[indice].valorProduto,
      quantidadeProduto : this.vetor[indice].quantidadeProduto,
      codigoBarraProduto : this.vetor[indice].codigoBarraProduto
    })
    this.visBtn = false;

  }
  alterar(){
    this.vetor[this.indice] = this.cadastro.value as Produto;

    this.cadastro.reset();

    this.visBtn = true;
    
  }
  excluir(){
    this.vetor.splice(this.indice, 1);

    this.cadastro.reset();

    this.visBtn = true

  }
  cancelar(){
    this.cadastro.reset();

    this.visBtn = true
    
  }


}

