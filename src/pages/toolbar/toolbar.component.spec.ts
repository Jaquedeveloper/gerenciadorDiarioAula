import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Toolbar, declarations, imports} from '../../app/app.module';

describe('Toolbar', () => {
  let component: Toolbar;
  let fixture: ComponentFixture<Toolbar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports : imports
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
