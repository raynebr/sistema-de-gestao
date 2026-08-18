import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../conponents/sidebar/sidebar.component';
import { VendasCardComponent } from '../../conponents/vendas-card/vendas-card.component';
import { RegistroVenda, Venda, VendasService } from '../../services/vendas.service';

@Component({
  selector: 'app-vendas',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, VendasCardComponent],
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.scss'
})
export class VendasComponent implements OnInit {
  metricas: Venda[] = [];
  registros: RegistroVenda[] = [];
  mostrarForm: boolean = false;

  novoRegistro = { cliente: '', produto: '', valor: 0, data: '' };

  constructor(private vendasService: VendasService) {}

  ngOnInit(): void {
    this.metricas = this.vendasService.getVendas();
    this.registros = this.vendasService.getRegistros();
  }

  salvar(): void {
    if (!this.novoRegistro.cliente || !this.novoRegistro.produto || !this.novoRegistro.data) {
      return;
    }
    this.vendasService.adicionarRegistro({ ...this.novoRegistro });
    this.novoRegistro = { cliente: '', produto: '', valor: 0, data: '' };
    this.mostrarForm = false;
  }

  remover(id: number): void {
    this.vendasService.removerRegistro(id);
  }
}
