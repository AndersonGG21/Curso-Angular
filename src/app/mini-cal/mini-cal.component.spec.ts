import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCalComponent } from './mini-cal.component';

describe('MiniCalComponent', () => {
  let component: MiniCalComponent;
  let fixture: ComponentFixture<MiniCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
