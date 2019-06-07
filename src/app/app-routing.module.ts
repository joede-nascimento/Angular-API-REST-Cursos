import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarCursosComponent } from './cursos/listar-cursos/listar-cursos.component';
import { AdicionarCursoComponent } from './cursos/adicionar-curso/adicionar-curso.component';
import { EditarCursoComponent } from './cursos/editar-curso/editar-curso.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'listar-cursos' },
  { path: 'listar-cursos', component: ListarCursosComponent },
  { path: 'adicionar-curso', component: AdicionarCursoComponent },
  { path: 'editar-curso/:id', component: EditarCursoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
