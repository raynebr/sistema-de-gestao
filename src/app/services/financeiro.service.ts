import { Injectable } from '@angular/core';

export type TipoLancamento = 'receita' | 'despesa';

export interface Lancamento {
  id: number;
  descricao: string;
  tipo: TipoLancamento;
  valor: number;
  data: string;
}

@Injectable({
  providedIn: 'root',
})
export class FinanceiroService {
  private lancamentos: Lancamento[] = [
    { id: 1, descricao: 'Venda iPhone 13', tipo: 'receita', valor: 3299, data: '2026-08-10' },
    { id: 2, descricao: 'Venda acessórios', tipo: 'receita', valor: 238, data: '2026-08-12' },
    { id: 3, descricao: 'Aluguel da loja', tipo: 'despesa', valor: 1800, data: '2026-08-05' },
    { id: 4, descricao: 'Compra de mercadoria', tipo: 'despesa', valor: 4200, data: '2026-08-08' },
    { id: 5, descricao: 'Venda MacBook Air', tipo: 'receita', valor: 6999, data: '2026-08-15' },
    { id: 6, descricao: 'Conta de energia', tipo: 'despesa', valor: 320, data: '2026-08-14' },
  ];

  getLancamentos(): Lancamento[] {
    return this.lancamentos;
  }

  getTotalReceitas(): number {
    return this.lancamentos.filter(l => l.tipo === 'receita').reduce((soma, l) => soma + l.valor, 0);
  }

  getTotalDespesas(): number {
    return this.lancamentos.filter(l => l.tipo === 'despesa').reduce((soma, l) => soma + l.valor, 0);
  }

  getSaldo(): number {
    return this.getTotalReceitas() - this.getTotalDespesas();
  }

  adicionarLancamento(lancamento: Omit<Lancamento, 'id'>): void {
    const novoId = this.lancamentos.length ? Math.max(...this.lancamentos.map(l => l.id)) + 1 : 1;
    this.lancamentos.push({ id: novoId, ...lancamento });
  }

  removerLancamento(id: number): void {
    this.lancamentos = this.lancamentos.filter(l => l.id !== id);
  }
}
