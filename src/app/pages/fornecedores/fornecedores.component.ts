import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../conponents/sidebar/sidebar.component';
import { Fornecedor, FornecedoresService } from '../../services/fornecedores.service';

@Component({
  selector: 'app-fornecedores',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './fornecedores.component.html',
  styleUrl: './fornecedores.component.scss'
})
export class FornecedoresComponent implements OnInit {
  fornecedores: Fornecedor[] = [];
  busca: string = '';
  mostrarForm: boolean = false;

  novoFornecedor = { nome: '', contato: '', telefone: '', cnpj: '' };

  constructor(private fornecedoresService: FornecedoresService) {}

  ngOnInit(): void {
    this.fornecedores = this.fornecedoresService.getFornecedores();
  }

  get fornecedoresFiltrados(): Fornecedor[] {
    const termo = this.busca.trim().toLowerCase();
    if (!termo) {
      return this.fornecedores;
    }
    return this.fornecedores.filter(f => f.nome.toLowerCase().includes(termo));
  }

  salvar(): void {
    if (!this.novoFornecedor.nome || !this.novoFornecedor.telefone) {
      return;
    }
    this.fornecedoresService.adicionarFornecedor({ ...this.novoFornecedor });
    this.novoFornecedor = { nome: '', contato: '', telefone: '', cnpj: '' };
    this.mostrarForm = false;
  }

  remover(id: number): void {
    this.fornecedoresService.removerFornecedor(id);
  }
}
