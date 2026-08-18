import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private router: Router) {}

  irPara(rota: string): void {
    this.router.navigate([rota]);
}

  isActive(rota: string): boolean {
    return this.router.url === '/' + rota;
  }

}