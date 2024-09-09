import { Component, Input } from '@angular/core';
import { MyBooks } from '../patparvmInterface';

@Component({
  selector: 'app-books-patparvm',
  templateUrl: './books-patparvm.component.html',
  styleUrl: './books-patparvm.component.css'
})
export class BooksPatparvmComponent {

  @Input() myBooks991718111!: MyBooks[];

  displayedColumns: string[] = ["author","title","publish"];

}
