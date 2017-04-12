import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { Sidebar } from '../../sidebar/sideBar.component';
import { Aula, PlanoAula, Aluno, Sala } from '../../../models/models';
import { planos, salas, alunos } from '../../../models/data';
import * as dialogPolyfill from 'dialog-polyfill';

@Component({
  selector: 'modal-ocorrencias',
  templateUrl: 'modal.component.html'
}) 
export class ModalOcorrencia implements OnInit {

  @ViewChild('dialog') dialog : ElementRef
  @Input() aluno : Aluno;
  ngOnInit(){
    dialogPolyfill.registerDialog(this.dialog.nativeElement);
    console.log(this.aluno);

  }

  model : string;

  showModal(){
    this.dialog.nativeElement.showModal();
  }

  closeModal(){
    this.dialog.nativeElement.close();
  }

  salvar(){
    this.aluno.ocorrencia.push(this.model);
    this.model = '';
    this.dialog.nativeElement.close();
  }
}