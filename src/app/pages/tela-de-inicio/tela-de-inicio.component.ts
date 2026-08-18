import { Component } from '@angular/core';
import { SidebarComponent } from '../../conponents/sidebar/sidebar.component';
@Component({
  selector: 'app-tela-de-inicio',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './tela-de-inicio.component.html',
  styleUrl: './tela-de-inicio.component.scss'
})
export class TelaDeInicioComponent {
}
