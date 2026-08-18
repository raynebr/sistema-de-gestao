import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vendas-card',
  standalone: true,
  imports: [],
  templateUrl: './vendas-card.component.html',
  styleUrl: './vendas-card.component.scss'
})
export class VendasCardComponent {
  @Input() value: number = 0;
  @Input() label: string = '';
  @Input() progress: number = 0; 
}
