import { Component } from '@angular/core';
import { Personal, Campus, MyBooks } from './patparvmInterface';
import cpdata from '../assets/data/Assignment02.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A2patparvm';

  patparvmPersonal: Personal = cpdata.a2Personal;

  patparvmBooks: MyBooks[] = cpdata.myBooks;

  patparvmCampus: Campus[] = cpdata.campusData;

}
