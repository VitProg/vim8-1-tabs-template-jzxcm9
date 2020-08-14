import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'tab-title',
    templateUrl: './tab-title.component.html',
    styleUrls: ['./tab-title.component.css'],
})
export class TabTitleComponent implements OnInit {
    @Input() isActive: boolean;

    @HostBinding('class')
    get hostClass() {
        return [
            'tabs__title',
            this.isActive ? 'tabs__title--active' : '',
        ].join(' ');
    }

    constructor() {
    }

    ngOnInit() {
    }

}
