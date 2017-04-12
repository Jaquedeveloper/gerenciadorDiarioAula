import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sideBar.component';
import { Aula, PlanoAula, Aluno, Sala } from '../../models/models';
import { planos, salas, alunos } from '../../models/data';
@Component({
  selector: 'content',
  templateUrl: 'content.component.html'
}) 
export class Content {
  constructor(){ 
    Sidebar.selectAula.subscribe((value : Aula) => {
      this.aula = value;
      if(value){
        this.planAula = planos.filter(x => value.planoAulaIds.indexOf(x.id) >= 0 );
        this.sala = salas.filter(x => value.salaId === x.id)[0];
        this.alunos = alunos.filter(x => this.sala.alunosIds.indexOf(x.id) >= 0);
        this.alunos.forEach(x => { x['faltou'] = false; x['mostrar'] = false; x['actions'] = false});
      } else {
        this.planAula = null;
        this.sala = null;
        this.alunos = null;
      }
    })
  }
  aula : Aula;
  mostrar : false;
  planAula : PlanoAula[];
  alunos : Aluno[];
  sala : Sala;

  present(evt, aluno){
    evt.stopPropagation(); aluno.faltou = aluno.faltou ? false : true;
  }

}