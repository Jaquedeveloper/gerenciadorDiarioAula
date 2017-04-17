import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlunoModal, DECLARATIONS, IMPORTS} from '../../app/app.module';

describe('AlunoModal', () => {
  let component: AlunoModal;
  let fixture: ComponentFixture<AlunoModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS,
      imports : IMPORTS
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

  it('deve conter nome da sala', () => {
    component.sala.descricao = 'teste';
    fixture.detectChanges();
    let el : HTMLElement = fixture.debugElement.query(By.css('#SalaDesc')).nativeElement;
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

  it ('deve cadastrar um novo aluno', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.debugElement.query(By.css('#nome')).nativeElement.value = 'jales';
    fixture.debugElement.query(By.css('#nome')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('#responsavel')).nativeElement.value = 'dora';
    fixture.debugElement.query(By.css('#responsavel')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('#contato')).nativeElement.value = '123213213';
    fixture.debugElement.query(By.css('#contato')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('#nascimento')).nativeElement.value = '16/05/1991';
    fixture.debugElement.query(By.css('#nascimento')).nativeElement.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();
    spyOn(component, 'salvar');
    let btnCadastrar = fixture.debugElement.query(By.css('#btnSalvar'));
    btnCadastrar.triggerEventHandler('click', null);
    expect(component.salvar).toHaveBeenCalled();
    expect(component.salvar).toHaveBeenCalledTimes(1);
  }));
  
});
