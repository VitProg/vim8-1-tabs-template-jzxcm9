import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <div>
      TestComponent {{ this.tab }} content
    </div>
  `,
})
export class TestComponent implements OnInit {
  @Input() tab: number;

  ngOnInit() {
    console.log(`>>> TestComponent ${this.tab} initialized`);
  }
}
