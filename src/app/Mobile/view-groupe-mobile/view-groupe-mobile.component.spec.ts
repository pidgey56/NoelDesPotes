import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGroupeMobileComponent } from './view-groupe-mobile.component';

describe('ViewGroupeMobileComponent', () => {
  let component: ViewGroupeMobileComponent;
  let fixture: ComponentFixture<ViewGroupeMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGroupeMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGroupeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
