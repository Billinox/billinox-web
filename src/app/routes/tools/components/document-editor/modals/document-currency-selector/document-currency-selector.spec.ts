import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCurrencySelector } from './document-currency-selector';

describe('DocumentCurrencySelector', () => {
  let component: DocumentCurrencySelector;
  let fixture: ComponentFixture<DocumentCurrencySelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentCurrencySelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentCurrencySelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
