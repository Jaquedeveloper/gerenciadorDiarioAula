import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Sidebar, DECLARATIONS, IMPORTS} from '../../app/app.module';

describe('Sidebar', () => {
  let component: Sidebar;
  let fixture: ComponentFixture<Sidebar>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS,
      imports : IMPORTS
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve retornar a data formata para component my-date-picker', () => {
    let today = new Date();
    expect(component.setDatePicker(today)).toEqual({date:{year:today.getFullYear(),month:today.getMonth()+1,day:today.getDate()}});
  })

  it('deve preencher celula com info', () => {
      fixture.detectChanges();
      let rows : HTMLElement[] = fixture.debugElement.query(By.css('td')).children[0].nativeElement.rows;
      let result = rows[0].textContent === component.aulas[0]['salaNome'] && rows[1].textContent === 
      component.aulas[0].materia && rows[2].textContent === `${component.aulas[0].inicio} as ${component.aulas[0].fim}`;
      expect(result).toEqual(true);
  })

  
});
