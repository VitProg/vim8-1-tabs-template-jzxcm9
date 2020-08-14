import {Component, Inject, OnInit} from '@angular/core';
import {ITabCollection, ITabCollectionRepository} from './tab/types';
import {TAB_COLLECTION_REPOSITORY} from './tab/di';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent implements OnInit {

  constructor(@Inject(TAB_COLLECTION_REPOSITORY) protected tabRepository: ITabCollectionRepository) {
    //
  }

  ngOnInit() {
    // add two tabs groups
    this.tabRepository.add();
    this.tabRepository.add();

    // add two tabs in first group
    this.tabRepository.get(0).add();
    this.tabRepository.get(0).add();

    // add three tabs in first group
    this.tabRepository.get(1).add();
    this.tabRepository.get(1).add();
    this.tabRepository.get(1).add();
  }

  dec(collectionIndex: number) {
    const collection = this.tabRepository.get(collectionIndex);
    if (collection) {
      collection.removeLast();
    }
  }

  inc(collectionIndex: number) {
    const collection = this.tabRepository.get(collectionIndex);
    if (collection) {
      collection.add();
    }
  }

  get tabs(): ITabCollection[] {
    return this.tabRepository.list;
  }
}
