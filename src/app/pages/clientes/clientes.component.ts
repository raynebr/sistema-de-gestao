import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../conponents/sidebar/sidebar.component';
import { Cliente, ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  busca: string = '';
  mostrarForm: boolean = false;

  novoCliente = { nome: '', telefone: '', email: '', cidade: '' };

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes();
  }

  get clientesFiltrados(): Cliente[] {
    const termo = this.busca.trim().toLowerCase();
    if (!termo) {
      return this.clientes;
    }
    return this.clientes.filter(c =>
      c.nome.toLowerCase().includes(termo) || c.cidade.toLowerCase().includes(termo)
    );
  }

  salvar(): void {
    if (!this.novoCliente.nome || !this.novoCliente.telefone) {
      return;
    }
    this.clientesService.adicionarCliente({ ...this.novoCliente });
    this.novoCliente = { nome: '', telefone: '', email: '', cidade: '' };
    this.mostrarForm = false;
  }

  remover(id: number): void {
    this.clientesService.removerCliente(id);
  }
}
