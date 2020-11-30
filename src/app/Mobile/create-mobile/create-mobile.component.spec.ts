import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMobileComponent } from './create-mobile.component';

describe('CreateMobileComponent', () => {
  let component: CreateMobileComponent;
  let fixture: ComponentFixture<CreateMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
