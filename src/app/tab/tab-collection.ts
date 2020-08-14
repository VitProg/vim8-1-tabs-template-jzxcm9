import {ITab, ITabCollection} from './types';

export class TabCollection implements ITabCollection {
    constructor(readonly collectionIndex: number) {
    }

    active = 0;
    list: ITab[] = [];

    get length() {
        return this.list.length;
    }

    add(): ITab {
        const tab: ITab = {
            tabIndex: this.list.length,
        };
        this.list.push(tab);
        return tab;
    }

    get(tabIndex: number): ITab | undefined {
        return tabIndex in this.list ? this.list[tabIndex] : undefined;
    }

    isActive(index: number): boolean {
        return this.active === index;
    }

    remove(removedIndex: number): boolean {
        if (removedIndex >= this.list.length) {
            return false;
        }

        // immutable remove item in array
        this.list = [
            ...this.list.slice(0, removedIndex),
            ...this.list.slice(removedIndex + 1),
        ];

        if (this.isActive(removedIndex)) {
            this.toggle(0);
        }

        return true;
    }

    removeLast(): boolean {
        const lastIndex = this.list.length - 1;
        return this.remove(lastIndex);
    }

    toggle(index: number): boolean {
        if (index === 0 || (index >= 0 && index < this.list.length)) {
            this.active = index;
            return true;
        }
        this.active = 0;
        return false;
    }
}
