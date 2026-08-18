import { Injectable } from '@angular/core';

export interface Cliente {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  cidade: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private clientes: Cliente[] = [
    { id: 1, nome: 'João Pereira', telefone: '(85) 99123-4567', email: 'joao.pereira@email.com', cidade: 'Fortaleza' },
    { id: 2, nome: 'Maria Souza', telefone: '(85) 99876-5432', email: 'maria.souza@email.com', cidade: 'Fortaleza' },
    { id: 3, nome: 'Carlos Lima', telefone: '(85) 98888-1122', email: 'carlos.lima@email.com', cidade: 'Caucaia' },
    { id: 4, nome: 'Ana Rocha', telefone: '(85) 99222-3344', email: 'ana.rocha@email.com', cidade: 'Maracanaú' },
  ];

  getClientes(): Cliente[] {
    return this.clientes;
  }

  adicionarCliente(cliente: Omit<Cliente, 'id'>): void {
    const novoId = this.clientes.length ? Math.max(...this.clientes.map(c => c.id)) + 1 : 1;
    this.clientes.push({ id: novoId, ...cliente });
  }

  removerCliente(id: number): void {
    this.clientes = this.clientes.filter(c => c.id !== id);
  }
}
