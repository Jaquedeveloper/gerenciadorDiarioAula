import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Sidebar } from '../pages/sidebar/sideBar.component';
import { Toolbar } from '../pages/toolbar/toolbar.component';
import { Content } from '../pages/content/content.component';
import { AlunoModal } from '../pages/aluno/alunoModal.componen';
import { ModalOcorrencia } from '../pages/ocorrencia/ocorrencia.component';
import { MyDatePickerModule } from 'mydatepicker';

export const DECLARATIONS = [
    AppComponent,
    Sidebar, Toolbar, Content, ModalOcorrencia, AlunoModal
  ];
  export const IMPORTS = [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule
  ];

@NgModule({
  declarations: DECLARATIONS,
  // entryComponents : [ Sidebar],
  imports: IMPORTS,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export * from './app.component';
export * from '../pages/sidebar/sideBar.component';
export * from '../pages/toolbar/toolbar.component';
export * from '../pages/content/content.component';
export * from '../pages/aluno/alunoModal.componen';
export * from '../pages/ocorrencia/ocorrencia.component';