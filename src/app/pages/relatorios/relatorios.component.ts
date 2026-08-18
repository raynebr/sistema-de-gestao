import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../conponents/sidebar/sidebar.component';
import { RelatoriosService, ResumoGeral } from '../../services/relatorios.service';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './relatorios.component.html',
  styleUrl: './relatorios.component.scss'
})
export class RelatoriosComponent implements OnInit {
  resumo!: ResumoGeral;

  constructor(private relatoriosService: RelatoriosService) {}

  ngOnInit(): void {
    this.resumo = this.relatoriosService.getResumoGeral();
  }
}
