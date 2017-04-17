import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar, declarations, imports} from '../../app/app.module';

describe('Sidebar', () => {
  let component: Sidebar;
  let fixture: ComponentFixture<Sidebar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports : imports
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
    expect(component.setToday()).toEqual({date:{year:today.getFullYear(),month:today.getMonth()+1,day:today.getDate()}});
  })
});
