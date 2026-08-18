import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../conponents/sidebar/sidebar.component';
import { OrdemServico, OrdensDeServicoService, StatusOrdem } from '../../services/ordens-de-servico.service';

@Component({
  selector: 'app-ordens-de-servico',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './ordens-de-servico.component.html',
  styleUrl: './ordens-de-servico.component.scss'
})
export class OrdensDeServicoComponent implements OnInit {
  ordens: OrdemServico[] = [];
  mostrarForm: boolean = false;

  status: StatusOrdem[] = ['aberta', 'em andamento', 'concluida', 'cancelada'];

  novaOrdem: { cliente: string; equipamento: string; problema: string; status: StatusOrdem; data: string } = {
    cliente: '',
    equipamento: '',
    problema: '',
    status: 'aberta',
    data: '',
  };

  constructor(private ordensService: OrdensDeServicoService) {}

  ngOnInit(): void {
    this.ordens = this.ordensService.getOrdens();
  }

  salvar(): void {
    if (!this.novaOrdem.cliente || !this.novaOrdem.equipamento) {
      return;
    }
    this.ordensService.adicionarOrdem({ ...this.novaOrdem });
    this.novaOrdem = { cliente: '', equipamento: '', problema: '', status: 'aberta', data: '' };
    this.mostrarForm = false;
  }

  atualizarStatus(id: number, status: string): void {
    this.ordensService.atualizarStatus(id, status as StatusOrdem);
  }

  remover(id: number): void {
    this.ordensService.removerOrdem(id);
  }

  classeStatus(status: StatusOrdem): string {
    return 'badge--' + status.replace(' ', '-');
  }
}
