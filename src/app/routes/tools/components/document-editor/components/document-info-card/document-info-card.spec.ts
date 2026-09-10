import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentInfoCard } from './document-info-card';

describe('DocumentInfoCard', () => {
  let component: DocumentInfoCard;
  let fixture: ComponentFixture<DocumentInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
