import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmSignupComponent } from './comfirm-signup.component';

describe('ComfirmSignupComponent', () => {
  let component: ComfirmSignupComponent;
  let fixture: ComponentFixture<ComfirmSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComfirmSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComfirmSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
