import { Component, OnInit } from '@angular/core';

import { CursoService } from '../curso.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  cursos: any = [];

  constructor(
    private cursoService: CursoService
  ) { }

  ngOnInit() {
    this.buscarCursos();
  }

  buscarCursos(){
    this.cursoService.getCursos()
    .subscribe(
      data => {
        this.cursos = data;
      },
      error =>  console.error(error)
    );
  }

  removerCurso(id){
    this.cursoService.deletarCurso(id)
    .subscribe(
      data => {
        this.buscarCursos();
      },
      error => console.log(error)
    );
  }

}
