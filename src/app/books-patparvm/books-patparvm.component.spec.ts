import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPatparvmComponent } from './books-patparvm.component';

describe('BooksPatparvmComponent', () => {
  let component: BooksPatparvmComponent;
  let fixture: ComponentFixture<BooksPatparvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksPatparvmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksPatparvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
