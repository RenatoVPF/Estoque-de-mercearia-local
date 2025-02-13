import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Produto } from '../modelo/Produto';

@Component({
  selector: 'app-cadastro-de-produtos',
  imports: [FormsModule, ReactiveFormsModule, ],
  templateUrl: './cadastro-de-produtos.component.html',
  styleUrl: './cadastro-de-produtos.component.css'
})
export class CadastroDeProdutosComponent {

  cadastro = new FormGroup({
    nomeDoProduto : new FormControl('', Validators.required),
    dataDeValidade : new FormControl(null, Validators.required),
    valorDoProduto : new FormControl(null, Validators.required),
    quantidadeDeProdutos : new FormControl(null, Validators.required),
    codigoDeBarraDoProduto : new FormControl('', Validators.required)
  })
  vetor:Produto[] = []
  cadastra(){
    this.vetor.push(this.cadastro.value as Produto)

    this.cadastro.reset();

    console.table(this.vetor)
  }

}

