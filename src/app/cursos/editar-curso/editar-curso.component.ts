import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CursoService } from '../curso.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  id: number = this.actRouter.snapshot.params.id;
  formulario: FormGroup;
  mostraMsgResul: string = '';
  nomeCurso: string = '';


  constructor(
    private actRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private cursoService: CursoService
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      instituicao: [null, Validators.required],
      duracao: [null, Validators.required]
    });
    
    this.BuscaRegistro(this.id);
  }

  BuscaRegistro(id){
    this.cursoService.getUmCurso(id)
    .subscribe(
      data => {
        this.formulario.patchValue({
          nome: data.nome,
          instituicao: data.instituicao,
          duracao: data.duracao,
        });
      },
      error => console.log(error)
    );

  }

  atualizarcurso(){
    this.cursoService.alterarCurso(this.id, this.formulario.value)
    .subscribe(
      data => {
        this.nomeCurso = data.nome;
        this.mostraMsgResul = 'success';
      },
      error => {
        console.error(error);
        this.nomeCurso = '';
        this.mostraMsgResul = 'error';
      }
    );
  }

}
