import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseOfService } from './use-of-service';

describe('UseOfService', () => {
  let component: UseOfService;
  let fixture: ComponentFixture<UseOfService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseOfService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseOfService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
