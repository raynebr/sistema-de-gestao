import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../conponents/sidebar/sidebar.component';
import { FinanceiroService, Lancamento, TipoLancamento } from '../../services/financeiro.service';

@Component({
  selector: 'app-financeiro',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './financeiro.component.html',
  styleUrl: './financeiro.component.scss'
})
export class FinanceiroComponent implements OnInit {
  lancamentos: Lancamento[] = [];
  mostrarForm: boolean = false;

  novoLancamento: { descricao: string; tipo: TipoLancamento; valor: number; data: string } = {
    descricao: '',
    tipo: 'receita',
    valor: 0,
    data: '',
  };

  constructor(private financeiroService: FinanceiroService) {}

  ngOnInit(): void {
    this.lancamentos = this.financeiroService.getLancamentos();
  }

  get totalReceitas(): number {
    return this.financeiroService.getTotalReceitas();
  }

  get totalDespesas(): number {
    return this.financeiroService.getTotalDespesas();
  }

  get saldo(): number {
    return this.financeiroService.getSaldo();
  }

  salvar(): void {
    if (!this.novoLancamento.descricao || !this.novoLancamento.valor || !this.novoLancamento.data) {
      return;
    }
    this.financeiroService.adicionarLancamento({ ...this.novoLancamento });
    this.novoLancamento = { descricao: '', tipo: 'receita', valor: 0, data: '' };
    this.mostrarForm = false;
  }

  remover(id: number): void {
    this.financeiroService.removerLancamento(id);
  }
}
