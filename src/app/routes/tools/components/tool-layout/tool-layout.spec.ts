import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolLayout } from './tool-layout';

describe('ToolLayout', () => {
  let component: ToolLayout;
  let fixture: ComponentFixture<ToolLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
