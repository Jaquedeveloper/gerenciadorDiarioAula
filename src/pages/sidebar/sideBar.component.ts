import { Component, EventEmitter } from '@angular/core';
import {IMyOptions, IMyDateModel } from 'mydatepicker';
import { aulas, salas } from '../../models/data';
import { Aula, PlanoAula, Aluno, Sala } from '../../models/models';

@Component({
  selector: 'side-bar',
  templateUrl: 'sideBar.component.html'
})
export class Sidebar {
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    showInputField : true,
    showClearDateBtn : false,
    todayBtnTxt : 'Hoje',
    dayLabels : {su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab'},
    monthLabels : { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' }
  };

  public static selectAula = new EventEmitter<any>();

  private model = this.setToday();

  aulas = aulas.map(x =>{ x.dia = this.model.date; x['click'] = false; x['salaNome'] = salas.filter(y => y.id === x.salaId)[0].descricao;  return x;});
 
  click(aula : Aula){
    this.aulas.forEach(x =>{ x['click'] = false;});
    let dia = new Date(this.model.date.year, this.model.date.month -1, this.model.date.day);
    aula.dia = `${this.dayOfWeekAsString(dia.getDay() -1)}, ${dia.toLocaleDateString()}`;
    aula['click'] = true;
    Sidebar.selectAula.emit(aula);
  }

  onDateChanged() {
    Sidebar.selectAula.emit(null);
    this.aulas.forEach(x =>{ x['click'] = false;});
    for (var i = this.aulas.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.aulas[i];
      this.aulas[i] = this.aulas[j];
      this.aulas[j] = temp;
    }
  }

  setToday(): any {
    let date = new Date();
    return { date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
      }
    };
  }

  dayOfWeekAsString(dayIndex) : string {
    return ["Seg","Ter","Qua","Qui","Sex","Sab","Dom"][dayIndex];
  }
}