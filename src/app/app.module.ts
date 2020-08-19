import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { TabModule } from './tab/tab.module';

@NgModule({
  imports:      [ BrowserModule, TabModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  schemas:      [  ],
})
export class AppModule { }
