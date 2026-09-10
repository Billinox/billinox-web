import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentMetaCard } from './document-meta-card';

describe('DocumentMetaCard', () => {
  let component: DocumentMetaCard;
  let fixture: ComponentFixture<DocumentMetaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentMetaCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentMetaCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
