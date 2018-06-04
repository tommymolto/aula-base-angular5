import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CadastroanimalComponent } from './cadastroanimal/cadastroanimal.component';

const routes: Routes = [
  { path: 'componente', component: InicioComponent},
   { path: 'cadastro', component: CadastroanimalComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
