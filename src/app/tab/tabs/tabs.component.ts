import { Component, OnInit } from '@angular/core';
import {ITabCollectionRepository} from "../types";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  // todo from DI container
  protected tabRepository: ITabCollectionRepository;

  constructor() { }

  ngOnInit() {
  }

}
