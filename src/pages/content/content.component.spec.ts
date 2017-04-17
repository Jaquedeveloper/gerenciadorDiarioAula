import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Content, DECLARATIONS, IMPORTS, Sidebar} from '../../app/app.module';
import { aulas, planos } from '../../models/mock';

describe('Content', () => {
  let component: Content;
  let fixture: ComponentFixture<Content>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS,
      imports : IMPORTS
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Content);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve preencher titulo', () => {
    let sidebar = TestBed.createComponent(Sidebar).componentInstance;
    let today = new Date;
    aulas[0].dia = `${sidebar.dayOfWeekAsString(today.getDay() -1)}, ${today.toLocaleDateString()}`;
    Sidebar.selectAula.emit(aulas[0]);
    fixture.detectChanges();
    let el : HTMLElement = fixture.debugElement.query(By.css('#titlePage')).nativeElement;
    expect(`${aulas[0].dia} ${component.sala.descricao} ${aulas[0].materia}`).toEqual(el.textContent);
  })

  it('deve preencher um item de lista', () => {
    let sidebar = TestBed.createComponent(Sidebar).componentInstance;
    let today = new Date;
    aulas[0].dia = `${sidebar.dayOfWeekAsString(today.getDay() -1)}, ${today.toLocaleDateString()}`;
    Sidebar.selectAula.emit(aulas[0]);
    fixture.detectChanges();
    let el : HTMLElement = fixture.debugElement.query(By.css('.mdl-chip__text')).nativeElement;
    expect(component.alunos[0].nome).toEqual(el.textContent);
  })

  it('deve preecher um item de plano de aula', () => {
    component.planAula = [planos[0]];
    fixture.detectChanges();
    let el : HTMLElement = fixture.debugElement.query(By.css('#planDesc')).nativeElement;
    expect(planos[0].descricao).toEqual(el.textContent);
  })
});
