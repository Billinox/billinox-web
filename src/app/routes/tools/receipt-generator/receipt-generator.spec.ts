import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptGenerator } from './receipt-generator';

describe('ReceiptGenerator', () => {
  let component: ReceiptGenerator;
  let fixture: ComponentFixture<ReceiptGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
