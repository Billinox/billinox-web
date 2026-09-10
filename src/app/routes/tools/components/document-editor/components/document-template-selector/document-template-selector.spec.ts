import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTemplateSelector } from './document-template-selector';

describe('DocumentTemplateSelector', () => {
  let component: DocumentTemplateSelector;
  let fixture: ComponentFixture<DocumentTemplateSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentTemplateSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTemplateSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
