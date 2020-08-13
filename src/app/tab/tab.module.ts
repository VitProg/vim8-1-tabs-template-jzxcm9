import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabTitleComponent } from './tab/tab-title/tab-title.component';
import { TabContentComponent } from './tab/tab-content/tab-content.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent,
  ],
  exports: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent,
  ],
})
export class TabModule { }
