import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPatparvmComponent } from './header-patparvm.component';

describe('HeaderPatparvmComponent', () => {
  let component: HeaderPatparvmComponent;
  let fixture: ComponentFixture<HeaderPatparvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPatparvmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPatparvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
