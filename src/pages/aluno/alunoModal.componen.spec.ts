import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoModal, declarations,imports} from '../../app/app.module';

describe('AlunoModal', () => {
  let component: AlunoModal;
  let fixture: ComponentFixture<AlunoModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports : imports
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
