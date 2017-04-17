import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { Sidebar } from '../sidebar/sideBar.component';
import { Aula, PlanoAula, Aluno, Sala } from '../../models/models';
import { planos, salas, alunos } from '../../models/mock';
import * as dialogPolyfill from 'dialog-polyfill';

@Component({
  selector: 'modal-ocorrencias',
  templateUrl: 'ocorrencia.component.html'
}) 
export class ModalOcorrencia implements OnInit {

  @ViewChild('dialog') dialog : ElementRef
  @Input() aluno : Aluno = new Aluno();
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
    debugger;
    if(!this.aluno.ocorrencia) this.aluno.ocorrencia = [];
    this.aluno.ocorrencia.push(this.model);
    this.model = '';
    this.dialog.nativeElement.close();
  }
}