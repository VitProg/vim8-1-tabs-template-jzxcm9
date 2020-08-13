import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() index: number;
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  clickTab($event: Event) {

  }

}
