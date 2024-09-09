import { Component, Input } from '@angular/core';
import { Personal } from '../patparvmInterface';

@Component({
  selector: 'app-footer-patparvm',
  templateUrl: './footer-patparvm.component.html',
  styleUrl: './footer-patparvm.component.css'
})
export class FooterPatparvmComponent {

  @Input() patparvmMyData!: Personal;

}
