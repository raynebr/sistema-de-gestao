import { Injectable } from '@angular/core';

export type StatusOrdem = 'aberta' | 'em andamento' | 'concluida' | 'cancelada';

export interface OrdemServico {
  id: number;
  cliente: string;
  equipamento: string;
  problema: string;
  status: StatusOrdem;
  data: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrdensDeServicoService {
  private ordens: OrdemServico[] = [
    { id: 1, cliente: 'João Pereira', equipamento: 'iPhone 12', problema: 'Troca de tela', status: 'em andamento', data: '2026-08-14' },
    { id: 2, cliente: 'Maria Souza', equipamento: 'Samsung A52', problema: 'Não liga', status: 'aberta', data: '2026-08-16' },
    { id: 3, cliente: 'Carlos Lima', equipamento: 'MacBook Pro', problema: 'Troca de bateria', status: 'concluida', data: '2026-08-09' },
    { id: 4, cliente: 'Ana Rocha', equipamento: 'iPad Air', problema: 'Conector de carga', status: 'cancelada', data: '2026-08-07' },
  ];

  getOrdens(): OrdemServico[] {
    return this.ordens;
  }

  getAbertas(): OrdemServico[] {
    return this.ordens.filter(o => o.status === 'aberta' || o.status === 'em andamento');
  }

  adicionarOrdem(ordem: Omit<OrdemServico, 'id'>): void {
    const novoId = this.ordens.length ? Math.max(...this.ordens.map(o => o.id)) + 1 : 1;
    this.ordens.push({ id: novoId, ...ordem });
  }

  atualizarStatus(id: number, status: StatusOrdem): void {
    const ordem = this.ordens.find(o => o.id === id);
    if (ordem) {
      ordem.status = status;
    }
  }

  removerOrdem(id: number): void {
    this.ordens = this.ordens.filter(o => o.id !== id);
  }
}
