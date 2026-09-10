import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTemplateCard } from './document-template-card';

describe('DocumentTemplateCard', () => {
  let component: DocumentTemplateCard;
  let fixture: ComponentFixture<DocumentTemplateCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentTemplateCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTemplateCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
