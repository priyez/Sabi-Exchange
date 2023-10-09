import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  formattedDate: any;
  formattedTime: any;


  constructor(private datePipe: DatePipe) {
    // Get the current date and format it
    const currDate = new Date();
       // Get the current time
    const currentHours: number = currDate.getHours();
    const currentMinutes: number = currDate.getMinutes();
  
    this.formattedDate = this.datePipe.transform(currDate, 'dd MMMM yyyy');
    this.formattedTime = currentHours.toString().padStart(2, '0') + ":" + currentMinutes.toString().padStart(2, '0')
  }

  ngOnInit(): void {
  }

}
