import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-de-produtos',
  imports: [FormsModule, ReactiveFormsModule, ],
  templateUrl: './cadastro-de-produtos.component.html',
  styleUrl: './cadastro-de-produtos.component.css'
})
export class CadastroDeProdutosComponent {

  cadastro = new FormGroup({
    nomedoProduto : new FormControl(''),
    dataDeValidade : new FormControl(''),
    valorDoProduto : new FormControl(null),
    quantidadeDeProdutos : new FormControl(null),
    codigoDeBarraDoProduto : new FormControl('')
  })


}
