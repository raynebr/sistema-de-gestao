import { Routes } from '@angular/router';
import { SidebarComponent } from './conponents/sidebar/sidebar.component';
import { TelaDeInicioComponent } from './pages/tela-de-inicio/tela-de-inicio.component';
import { LoginComponent } from './pages/login/login.component';
export const routes: Routes = [
     {
    path:"",
    redirectTo:"login",
    pathMatch:"full",
  },
  {
    path:"login",
    component:LoginComponent,
  },
    {
        path: 'sidebar',
        component: SidebarComponent,
    },
    {
        path: 'teladeinicio',
        component: TelaDeInicioComponent,
    },
];
