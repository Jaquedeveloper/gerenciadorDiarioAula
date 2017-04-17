import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOcorrencia, declarations, imports} from '../../app/app.module';

describe('ModalOcorrencia', () => {
  let component: ModalOcorrencia;
  let fixture: ComponentFixture<ModalOcorrencia>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports : imports
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOcorrencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
