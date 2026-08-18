import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../conponents/sidebar/sidebar.component';
import { Configuracoes, ConfiguracoesService } from '../../services/configuracoes.service';

@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.scss'
})
export class ConfiguracoesComponent implements OnInit {
  configuracoes!: Configuracoes;
  salvo: boolean = false;

  constructor(private configuracoesService: ConfiguracoesService) {}

  ngOnInit(): void {
    this.configuracoes = { ...this.configuracoesService.getConfiguracoes() };
  }

  salvar(): void {
    this.configuracoesService.salvar(this.configuracoes);
    this.salvo = true;
    setTimeout(() => (this.salvo = false), 2500);
  }
}
