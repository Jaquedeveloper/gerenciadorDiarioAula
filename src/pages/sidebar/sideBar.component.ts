import { Component, EventEmitter } from '@angular/core';
import {IMyOptions, IMyDateModel } from 'mydatepicker';
import { aulas, salas } from '../../models/data';

@Component({
  selector: 'side-bar',
  templateUrl: 'sideBar.component.html'
})
export class Sidebar {
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    showInputField : true,
    showClearDateBtn : false
  };

  public static selectAula = new EventEmitter<any>();

  private model: any = { date: { year: 2018, month: 10, day: 9 } };

  aulas = aulas.map(x =>{ x.dia = this.model.date; x['click'] = false; x['salaNome'] = salas.filter(y => y.id === x.salaId)[0].descricao;  return x;});
 
  click(aula){
    Sidebar.selectAula.emit(aula);
    this.aulas.forEach(x =>{x.dia = new Date(this.model.date.year, this.model.date.month, this.model.date.day).toLocaleDateString(); x['click'] = false;});
    aula.click = true;
  }

  onDateChanged() {
    Sidebar.selectAula.emit(null);
    this.aulas.forEach(x =>{x.dia = this.model.date; x['click'] = false;});
    for (var i = this.aulas.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.aulas[i];
      this.aulas[i] = this.aulas[j];
      this.aulas[j] = temp;
    }
  }
}