import { Injectable } from '@angular/core';

export interface ItemEstoque {
  id: number;
  produto: string;
  categoria: string;
  quantidade: number;
  preco: number;
}

@Injectable({
  providedIn: 'root',
})
export class EstoqueService {
  private itens: ItemEstoque[] = [
    { id: 1, produto: 'iPhone 13 128GB', categoria: 'Celulares', quantidade: 5, preco: 3299 },
    { id: 2, produto: 'Samsung Galaxy S22', categoria: 'Celulares', quantidade: 2, preco: 2899 },
    { id: 3, produto: 'MacBook Air M1', categoria: 'Notebooks', quantidade: 1, preco: 6999 },
    { id: 4, produto: 'Fone Bluetooth JBL', categoria: 'Acessórios', quantidade: 12, preco: 199 },
    { id: 5, produto: 'Capinha iPhone 13', categoria: 'Acessórios', quantidade: 0, preco: 39 },
    { id: 6, produto: 'iPad 9ª Geração', categoria: 'Tablets', quantidade: 3, preco: 2499 },
  ];

  private readonly ESTOQUE_BAIXO = 3;

  getItens(): ItemEstoque[] {
    return this.itens;
  }

  isEstoqueBaixo(item: ItemEstoque): boolean {
    return item.quantidade <= this.ESTOQUE_BAIXO;
  }

  adicionarItem(item: Omit<ItemEstoque, 'id'>): void {
    const novoId = this.itens.length ? Math.max(...this.itens.map(i => i.id)) + 1 : 1;
    this.itens.push({ id: novoId, ...item });
  }

  removerItem(id: number): void {
    this.itens = this.itens.filter(i => i.id !== id);
  }
}
