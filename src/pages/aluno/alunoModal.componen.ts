import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { Sidebar } from '../sidebar/sideBar.component';
import { Aula, PlanoAula, Aluno, Sala } from '../../models/models';
import * as data from '../../models/data';
import * as dialogPolyfill from 'dialog-polyfill';

@Component({
  selector: 'add-aluno',
  templateUrl: 'alunoModal.componen.html'
}) 
export class AlunoModal implements OnInit {

  @ViewChild('dialog') dialog : ElementRef
  @Input() sala : Sala;
  @Input() alunos : Aluno[];
  aluno : Aluno = new Aluno();
  ngOnInit(){
    dialogPolyfill.registerDialog(this.dialog.nativeElement);
  }

  model : string;

  showModal(){
    this.dialog.nativeElement.showModal();
  }

  closeModal(){
    this.dialog.nativeElement.close();
  }

  salvar(){
    let newId = 0;
    this.alunos.forEach(x => {
      if(x.id > newId) newId = x.id + 1;
    })
    this.aluno.id = newId;
    this.alunos.push(this.aluno);
    this.sala.alunosIds.push(newId);
    data.alunos.push(this.aluno);
    this.aluno = new Aluno();
    this.dialog.nativeElement.close();
  }
}