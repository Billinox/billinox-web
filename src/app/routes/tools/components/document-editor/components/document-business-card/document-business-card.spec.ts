import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentBusinessCard } from './document-business-card';

describe('DocumentBusinessCard', () => {
  let component: DocumentBusinessCard;
  let fixture: ComponentFixture<DocumentBusinessCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentBusinessCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentBusinessCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
