import { Routes } from '@angular/router';
import { TelaDeInicioComponent } from './pages/tela-de-inicio/tela-de-inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { OrdensDeServicoComponent } from './pages/ordens-de-servico/ordens-de-servico.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: 'teladeinicio',
    component: TelaDeInicioComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'vendas',
    component: VendasComponent,
  },
  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: 'fornecedores',
    component: FornecedoresComponent,
  },
  {
    path: 'estoque',
    component: EstoqueComponent,
  },
  {
    path: 'financeiro',
    component: FinanceiroComponent,
  },
  {
    path: 'ordens-de-servico',
    component: OrdensDeServicoComponent,
  },
  {
    path: 'relatorios',
    component: RelatoriosComponent,
  },
  {
    path: 'configuracoes',
    component: ConfiguracoesComponent,
  },
];
