import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSummaryCard } from './document-summary-card';

describe('DocumentSummaryCard', () => {
  let component: DocumentSummaryCard;
  let fixture: ComponentFixture<DocumentSummaryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentSummaryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentSummaryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
