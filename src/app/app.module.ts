import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { TabModule } from './tab/tab.module';
import {TabCollectionRepository} from "./tab/service/tab-collection-repository";
import {TAB_COLLECTION_REPOSITORY} from "./tab/di";


@NgModule({
  imports:      [ BrowserModule, TabModule, ],
  declarations: [ AppComponent, HelloComponent, TestComponent, ],
  bootstrap:    [ AppComponent ],
  schemas: [  ],
  providers: [
    {
      provide: TAB_COLLECTION_REPOSITORY,
      useClass: TabCollectionRepository,
    },
  ]
})
export class AppModule { }
