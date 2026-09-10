import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTemplateListing } from './document-template-listing';

describe('DocumentTemplateListing', () => {
  let component: DocumentTemplateListing;
  let fixture: ComponentFixture<DocumentTemplateListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentTemplateListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTemplateListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
