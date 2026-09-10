import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentItemsCard } from './document-items-card';

describe('DocumentItemsCard', () => {
  let component: DocumentItemsCard;
  let fixture: ComponentFixture<DocumentItemsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentItemsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentItemsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
