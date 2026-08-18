import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../conponents/sidebar/sidebar.component';
import { EstoqueService, ItemEstoque } from '../../services/estoque.service';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.scss'
})
export class EstoqueComponent implements OnInit {
  itens: ItemEstoque[] = [];
  busca: string = '';
  mostrarForm: boolean = false;

  novoItem = { produto: '', categoria: '', quantidade: 0, preco: 0 };

  constructor(private estoqueService: EstoqueService) {}

  ngOnInit(): void {
    this.itens = this.estoqueService.getItens();
  }

  get itensFiltrados(): ItemEstoque[] {
    const termo = this.busca.trim().toLowerCase();
    if (!termo) {
      return this.itens;
    }
    return this.itens.filter(i =>
      i.produto.toLowerCase().includes(termo) || i.categoria.toLowerCase().includes(termo)
    );
  }

  isEstoqueBaixo(item: ItemEstoque): boolean {
    return this.estoqueService.isEstoqueBaixo(item);
  }

  salvar(): void {
    if (!this.novoItem.produto || !this.novoItem.categoria) {
      return;
    }
    this.estoqueService.adicionarItem({ ...this.novoItem });
    this.novoItem = { produto: '', categoria: '', quantidade: 0, preco: 0 };
    this.mostrarForm = false;
  }

  remover(id: number): void {
    this.estoqueService.removerItem(id);
  }
}
