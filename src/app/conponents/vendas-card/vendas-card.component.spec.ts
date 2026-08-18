import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasCardComponent } from './vendas-card.component';

describe('VendasCardComponent', () => {
  let component: VendasCardComponent;
  let fixture: ComponentFixture<VendasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendasCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
