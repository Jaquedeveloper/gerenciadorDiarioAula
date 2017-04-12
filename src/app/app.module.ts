import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Sidebar } from '../pages/sidebar/sideBar.component';
import { Toolbar } from '../pages/toolbar/toolbar.component';
import { Content } from '../pages/content/content.component';
import { ModalOcorrencia } from '../pages/content/modalAction/modal.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  declarations: [
    AppComponent,
    Sidebar, Toolbar, Content, ModalOcorrencia
  ],
  // entryComponents : [ Sidebar],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
