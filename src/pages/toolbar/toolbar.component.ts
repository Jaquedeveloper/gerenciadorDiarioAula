import { Component } from '@angular/core';
import {IMyOptions} from 'mydatepicker';

declare var componentHandler: any;

@Component({
  selector: 'tool-bar',
  templateUrl: 'toolbar.component.html'
})
export class Toolbar {
/*
ISSO FAZ FUNCIONAR O ACCORDION
  */
  private abaHistoricoJsLibsStarted: boolean = false;
  ngAfterViewChecked() {
    componentHandler.upgradeDom(); // mdl
    let escola_info :any = document.getElementById("escola-info");
    if (!this.abaHistoricoJsLibsStarted && escola_info && escola_info.length) {
      escola_info.collapsible(); // materializecss
      this.abaHistoricoJsLibsStarted = true;
    }
  }
}