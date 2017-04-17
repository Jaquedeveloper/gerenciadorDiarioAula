import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Content, declarations, imports} from '../../app/app.module';

describe('Content', () => {
  let component: Content;
  let fixture: ComponentFixture<Content>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports : imports
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
});
