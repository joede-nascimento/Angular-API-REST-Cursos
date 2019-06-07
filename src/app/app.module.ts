import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarCursosComponent } from './cursos/listar-cursos/listar-cursos.component';
import { AdicionarCursoComponent } from './cursos/adicionar-curso/adicionar-curso.component';
import { EditarCursoComponent } from './cursos/editar-curso/editar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarCursosComponent,
    AdicionarCursoComponent,
    EditarCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
