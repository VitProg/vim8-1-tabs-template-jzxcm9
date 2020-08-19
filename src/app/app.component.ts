import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabs = [1, 2];
  activeIndex: number | false = 0;

  get activeTab(): number | false {
    return this.activeIndex === false ?
      false :
      this.getTabByIndex(this.activeIndex);
  }

  protected getTabByIndex(index: number): number {
    return index in this.tabs ? this.tabs[index] : 0;
  }

  dec() {
    this.tabs = this.tabs.slice(0, -1);
    if (this.isActive(this.tabs.length)) {
      this.toggle(0);
    }
  }

  inc() {
    this.tabs = [...this.tabs, (this.tabs.length + 1)];
    if (this.activeTab === false) {
      this.activeIndex = 0;
    }
  }

  isActive(index: number) {
    return this.activeIndex === index;
  }

  toggle(index: number) {
    this.activeIndex = this.tabs.length > 0 ?
      Math.min(this.tabs.length - 1, Math.max(0, index)) :
      false;
  }
}
