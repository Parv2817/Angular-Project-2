import { Component, Input, OnInit } from '@angular/core';
import { Campus } from '../patparvmInterface';

@Component({
  selector: 'app-campus-patparvm',
  templateUrl: './campus-patparvm.component.html',
  styleUrls: ['./campus-patparvm.component.css'] 
})
export class CampusPatparvmComponent implements OnInit {

  @Input() campusData991718111!: Campus[];
  campuses: string[] = [];
  campus = "";

  ngOnInit() {
    this.getCampuses();
  }

  getCampuses() {
    this.campuses = this.campusData991718111.map(campus => campus.campus);
  }

  getAddress(campus: string): string {
    const campusData = this.campusData991718111.find(c => c.campus === campus);
    
    if (campusData) 
    {
      return `${campusData.street.toUpperCase()}\n${campusData.city.toUpperCase()}`;
    } 
    else 
    {
      return 'Address not found';
    }

  }
}

