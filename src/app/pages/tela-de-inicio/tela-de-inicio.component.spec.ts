import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDeInicioComponent } from './tela-de-inicio.component';

describe('TelaDeInicioComponent', () => {
  let component: TelaDeInicioComponent;
  let fixture: ComponentFixture<TelaDeInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaDeInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaDeInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
