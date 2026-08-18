import { Injectable } from '@angular/core';

export interface Fornecedor {
  id: number;
  nome: string;
  contato: string;
  telefone: string;
  cnpj: string;
}

@Injectable({
  providedIn: 'root',
})
export class FornecedoresService {
  private fornecedores: Fornecedor[] = [
    { id: 1, nome: 'Distribuidora Tech Norte', contato: 'Renata Alves', telefone: '(85) 3222-1010', cnpj: '12.345.678/0001-90' },
    { id: 2, nome: 'Importadora Celular Plus', contato: 'Bruno Castro', telefone: '(85) 3233-2020', cnpj: '98.765.432/0001-11' },
    { id: 3, nome: 'Acessórios & Cia', contato: 'Fernanda Dias', telefone: '(85) 3244-3030', cnpj: '45.678.912/0001-33' },
  ];

  getFornecedores(): Fornecedor[] {
    return this.fornecedores;
  }

  adicionarFornecedor(fornecedor: Omit<Fornecedor, 'id'>): void {
    const novoId = this.fornecedores.length ? Math.max(...this.fornecedores.map(f => f.id)) + 1 : 1;
    this.fornecedores.push({ id: novoId, ...fornecedor });
  }

  removerFornecedor(id: number): void {
    this.fornecedores = this.fornecedores.filter(f => f.id !== id);
  }
}
