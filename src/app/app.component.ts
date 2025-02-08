import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroDeProdutosComponent } from "./cadastro-de-produtos/cadastro-de-produtos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroDeProdutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estoque_de_mercearialocal';
}
