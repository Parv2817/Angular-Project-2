import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusPatparvmComponent } from './campus-patparvm.component';

describe('CampusPatparvmComponent', () => {
  let component: CampusPatparvmComponent;
  let fixture: ComponentFixture<CampusPatparvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampusPatparvmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampusPatparvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
