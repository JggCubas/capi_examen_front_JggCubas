import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './modulos/usuarios/usuarios.component';


const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
  },
  {
    path: 'usuariosList',
    component: UsuariosComponent,
    data: {
      title: 'Lista de usuarios'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
