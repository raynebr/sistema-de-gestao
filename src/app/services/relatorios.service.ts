import { Injectable } from '@angular/core';
import { ClientesService } from './clientes.service';
import { EstoqueService } from './estoque.service';
import { FinanceiroService } from './financeiro.service';
import { OrdensDeServicoService } from './ordens-de-servico.service';
import { VendasService } from './vendas.service';

export interface ResumoGeral {
  totalClientes: number;
  totalItensEstoque: number;
  totalVendido: number;
  saldoFinanceiro: number;
  ordensAbertas: number;
}

@Injectable({
  providedIn: 'root',
})
export class RelatoriosService {
  constructor(
    private clientesService: ClientesService,
    private estoqueService: EstoqueService,
    private financeiroService: FinanceiroService,
    private ordensService: OrdensDeServicoService,
    private vendasService: VendasService,
  ) {}

  getResumoGeral(): ResumoGeral {
    return {
      totalClientes: this.clientesService.getClientes().length,
      totalItensEstoque: this.estoqueService.getItens().reduce((soma, i) => soma + i.quantidade, 0),
      totalVendido: this.vendasService.getRegistros().reduce((soma, r) => soma + r.valor, 0),
      saldoFinanceiro: this.financeiroService.getSaldo(),
      ordensAbertas: this.ordensService.getAbertas().length,
    };
  }
}
