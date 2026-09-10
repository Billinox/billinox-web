import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentBusinessForm } from './document-business-form';

describe('DocumentBusinessForm', () => {
  let component: DocumentBusinessForm;
  let fixture: ComponentFixture<DocumentBusinessForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentBusinessForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentBusinessForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
