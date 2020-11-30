import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinMobileComponent } from './join-mobile.component';

describe('JoinMobileComponent', () => {
  let component: JoinMobileComponent;
  let fixture: ComponentFixture<JoinMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
