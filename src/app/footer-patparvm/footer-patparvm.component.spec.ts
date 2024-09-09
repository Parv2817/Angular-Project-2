import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPatparvmComponent } from './footer-patparvm.component';

describe('FooterPatparvmComponent', () => {
  let component: FooterPatparvmComponent;
  let fixture: ComponentFixture<FooterPatparvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterPatparvmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterPatparvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
