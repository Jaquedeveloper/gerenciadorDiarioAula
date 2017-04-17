import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ModalOcorrencia, DECLARATIONS, IMPORTS} from '../../app/app.module';

describe('ModalOcorrencia', () => {
  let component: ModalOcorrencia;
  let fixture: ComponentFixture<ModalOcorrencia>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS,
      imports : IMPORTS
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

  it('deve mostar nome do aluno', () => {
    component.aluno.nome = 'teste';
    fixture.detectChanges();
    let el : HTMLElement = fixture.debugElement.query(By.css('#alunoNome')).nativeElement;
    expect(el.textContent).toEqual('teste');
  })


  it('deve abrir e fechar modal', () =>{
    fixture.detectChanges();
    let btnOpenModal = fixture.debugElement.query(By.css('#openModal'));
    btnOpenModal.triggerEventHandler('click', null);
    let el : HTMLElement = fixture.debugElement.query(By.css('dialog')).nativeElement;
    fixture.detectChanges();
    let abriu = el.hasAttribute('open');
    let btnCloseModal = fixture.debugElement.query(By.css('#closeModal'));
    btnCloseModal.triggerEventHandler('click', null);
    fixture.detectChanges();
    let fechou = !el.hasAttribute('open');
    expect(abriu && fechou).toEqual(true);
  })

  it ('deve cadastrar uma nova ocorrencia', () => {
    // fixture.detectChanges();
    // let el : HTMLElement = fixture.debugElement.query(By.css('#ocorrenciaId')).nativeElement;
    // fixture.debugElement.query(By.css('#ocorrenciaId')).nativeElement.value = 'teste';
    // fixture.debugElement.query(By.css('#ocorrenciaId')).nativeElement.dispatchEvent(new Event('input'));
    // tick();
    // fixture.detectChanges();
    // spyOn(component, 'salvar');
    // let btnCadastrar = fixture.debugElement.query(By.css('#btnSalvar'));
    // btnCadastrar.triggerEventHandler('click', null);
    // debugger;
    // fixture.detectChanges();
    // tick();
    // expect(component.salvar).toHaveBeenCalled();
    // expect(component.salvar).toHaveBeenCalledTimes(1);
    // debugger;
    // expect(component.aluno.ocorrencia).toContain(el.textContent);
  });
});
