import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.css']
})
export class HeaderInfoComponent implements OnInit {

  @Input() public headerInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
