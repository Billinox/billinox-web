import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePromo } from './store-promo';

describe('StorePromo', () => {
  let component: StorePromo;
  let fixture: ComponentFixture<StorePromo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorePromo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorePromo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
