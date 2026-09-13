import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolFaq } from './tool-faq';

describe('ToolFaq', () => {
  let component: ToolFaq;
  let fixture: ComponentFixture<ToolFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolFaq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolFaq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
