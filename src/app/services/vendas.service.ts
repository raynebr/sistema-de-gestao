import { Injectable } from '@angular/core';

export interface Venda {
  value: number;
  label: string;
  progress: number
}

export interface RegistroVenda {
  id: number;
  data: string;
  cliente: string;
  produto: string;
  valor: number;
}

@Injectable({
  providedIn: 'root',
})
export class VendasService {
  private registros: RegistroVenda[] = [
    { id: 1, data: '2026-08-10', cliente: 'João Pereira', produto: 'iPhone 13 128GB', valor: 3299 },
    { id: 2, data: '2026-08-12', cliente: 'Maria Souza', produto: 'Capinha + Película', valor: 79 },
    { id: 3, data: '2026-08-15', cliente: 'Carlos Lima', produto: 'MacBook Air M1', valor: 6999 },
    { id: 4, data: '2026-08-16', cliente: 'Ana Rocha', produto: 'Fone Bluetooth JBL', valor: 199 },
  ];

  getRegistros(): RegistroVenda[] {
    return this.registros;
  }

  adicionarRegistro(registro: Omit<RegistroVenda, 'id'>): void {
    const novoId = this.registros.length ? Math.max(...this.registros.map(r => r.id)) + 1 : 1;
    this.registros.push({ id: novoId, ...registro });
  }

  removerRegistro(id: number): void {
    this.registros = this.registros.filter(r => r.id !== id);
  }

getVendas(): Venda[] {
  return [
    { value: 1, label: 'Vendas', progress: 20 },
    { value: 0, label: 'Reservas/Encomendas', progress: 0 },
    { value: 0, label: 'Clientes', progress: 0 },
    { value: 1, label: 'Vendas sem Cliente', progress: 20 },
    { value: 1, label: 'Itens', progress: 20 },
    { value: 1, label: 'Itens Lacrados', progress: 20 },
    { value: 0, label: 'Itens Seminovos', progress: 0 },
    { value: 0, label: 'Itens CPO', progress: 0 },
    { value: 0, label: 'Itens OpenBox', progress: 0 },
    { value: 1, label: 'Celulares', progress: 20 },
    { value: 0, label: 'iPhones', progress: 0 },
    { value: 1, label: 'Aparelhos MI', progress: 20 },
    { value: 0, label: 'MacBooks', progress: 0 },
    { value: 0, label: 'iPads', progress: 0 },
    { value: 0, label: 'Relógios', progress: 0 },
    { value: 0, label: 'Fones', progress: 0 },
    { value: 0, label: 'Acessórios', progress: 0 },
  ];
}
}
