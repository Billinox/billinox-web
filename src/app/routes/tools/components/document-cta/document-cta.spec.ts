import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCTA } from './document-cta';

describe('DocumentCTA', () => {
  let component: DocumentCTA;
  let fixture: ComponentFixture<DocumentCTA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentCTA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentCTA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
