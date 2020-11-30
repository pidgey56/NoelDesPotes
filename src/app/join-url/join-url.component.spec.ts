import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUrlComponent } from './join-url.component';

describe('JoinUrlComponent', () => {
  let component: JoinUrlComponent;
  let fixture: ComponentFixture<JoinUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
