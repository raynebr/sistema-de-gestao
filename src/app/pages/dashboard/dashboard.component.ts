import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../conponents/sidebar/sidebar.component';
import { VendasCardComponent } from '../../conponents/vendas-card/vendas-card.component';
import { CommonModule } from '@angular/common';
import { Venda, VendasService } from '../../services/vendas.service';
import { TabsComponent } from '../../conponents/tabs/tabs.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent,VendasCardComponent,
    CommonModule,TabsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  vendas: Venda[] = [];
  activeTab: string = 'vendas';

   constructor(private vendasService: VendasService) {}

  ngOnInit(): void {
    this.vendas = this.vendasService.getVendas();
  }
   mudarTab(tabId: string): void {
    this.activeTab = tabId;
  }
}
