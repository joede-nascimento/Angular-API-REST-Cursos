import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { take } from 'rxjs/operators';

import { Curso } from './curso.model';



@Injectable({
  providedIn: 'root'
})
export class CursoService {

 private urlAPI: string = "http://localhost:3000";

  constructor(
    private http: HttpClient
  ) { }

  getCursos(): Observable<Curso>{
    return this.http.get<Curso>(`${this.urlAPI}/cursos`).pipe(take(1));
  }

  getUmCurso(id): Observable<Curso>{
    return this.http.get<Curso>(`${this.urlAPI}/cursos/${id}`).pipe(take(1));
  }

  criarCurso(curso): Observable<Curso>{
    return this.http.post<Curso>(`${this.urlAPI}/cursos`, curso).pipe(take(1));
  }

  alterarCurso(id, curso): Observable<Curso>{
    return this.http.put<Curso>(`${this.urlAPI}/cursos/${id}`, curso).pipe(take(1));
  }

  deletarCurso(id): Observable<Curso>{
    return this.http.delete<Curso>(`${this.urlAPI}/cursos/${id}`).pipe(take(1));
  }
}
