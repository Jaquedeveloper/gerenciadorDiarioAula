import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Toolbar, DECLARATIONS, IMPORTS} from '../../app/app.module';

describe('Toolbar', () => {
  let component: Toolbar;
  let fixture: ComponentFixture<Toolbar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS,
      imports : IMPORTS
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Toolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
