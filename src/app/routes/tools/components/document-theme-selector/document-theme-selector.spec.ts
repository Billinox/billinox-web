import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentThemeSelector } from './document-theme-selector';

describe('DocumentThemeSelector', () => {
  let component: DocumentThemeSelector;
  let fixture: ComponentFixture<DocumentThemeSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentThemeSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentThemeSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
