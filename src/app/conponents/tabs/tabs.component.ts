import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

interface Tab {
  id: string;
  label: string;
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
 tabs: Tab[] = [
    { id: 'vendas', label: 'Vendas' },
    { id: 'ordens', label: 'Ordens de Serviço' },
    { id: 'outras', label: 'Outras Métricas' },
    { id: 'colaboradores', label: 'Colaboradores' },
    { id: 'insights', label: 'Insights' },
  ];

  activeTab: string = 'vendas'; // começa com "Vendas" selecionada

  @Output() tabChange = new EventEmitter<string>();

  selecionarTab(id: string): void {
    this.activeTab = id;
    this.tabChange.emit(id);
  }
}
