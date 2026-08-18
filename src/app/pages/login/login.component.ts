import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  senha = '';
  erro = '';

  constructor(private router: Router) {}

  onEntrar(): void {
    if (!this.email || !this.senha) {
      this.erro = 'Preencha email e senha.';
      return;
    }

    this.erro = '';
    this.router.navigate(['/teladeinicio']);
  }
} 

