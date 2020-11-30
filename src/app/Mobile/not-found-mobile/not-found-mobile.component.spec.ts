import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundMobileComponent } from './not-found-mobile.component';

describe('NotFoundMobileComponent', () => {
  let component: NotFoundMobileComponent;
  let fixture: ComponentFixture<NotFoundMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
