import { Injectable } from '@angular/core';

export interface Configuracoes {
  nomeLoja: string;
  email: string;
  tema: 'escuro' | 'claro';
  notificacoes: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ConfiguracoesService {
  private configuracoes: Configuracoes = {
    nomeLoja: 'Gt cell',
    email: 'contato@gtcell.com',
    tema: 'escuro',
    notificacoes: true,
  };

  getConfiguracoes(): Configuracoes {
    return this.configuracoes;
  }

  salvar(config: Configuracoes): void {
    this.configuracoes = { ...config };
  }
}
