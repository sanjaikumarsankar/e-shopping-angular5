import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  @Input() public contactInfo: any;

  constructor() { }

  ngOnInit() {
    console.log('contactInfo' + this.contactInfo);
  }

}
