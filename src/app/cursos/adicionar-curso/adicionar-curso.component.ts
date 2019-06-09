import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CursoService } from '../curso.service';


@Component({
  selector: 'app-adicionar-curso',
  templateUrl: './adicionar-curso.component.html',
  styleUrls: ['./adicionar-curso.component.css']
})
export class AdicionarCursoComponent implements OnInit {

  formulario: FormGroup;
  mostraMsgResult: string = '';
  nomeCurso: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private cursoService: CursoService
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      instituicao: [null, Validators.required],
      duracao: [null, Validators.required]
    });

  }

  adicionarCurso(){
    this.cursoService.criarCurso(this.formulario.value)
    .subscribe(
      data => {
        this.nomeCurso = data.nome;
        this.mostraMsgResult = 'success';
      },
      error => {
        console.error(error);
        this.nomeCurso = '';
        this.mostraMsgResult = 'error';
      }
    );
  }

  mostraErro(campo){
    return campo.invalid && campo.touched;
  }

}
