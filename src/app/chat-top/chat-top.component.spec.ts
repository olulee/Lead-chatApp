import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTopComponent } from './chat-top.component';

describe('ChatTopComponent', () => {
  let component: ChatTopComponent;
  let fixture: ComponentFixture<ChatTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
