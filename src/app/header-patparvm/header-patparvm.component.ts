import { Component, Input } from '@angular/core';
import { Personal } from '../patparvmInterface';

@Component({
  selector: 'app-header-patparvm',
  templateUrl: './header-patparvm.component.html',
  styleUrl: './header-patparvm.component.css'
})
export class HeaderPatparvmComponent {

  @Input() patparvmMyData!: Personal;
}
