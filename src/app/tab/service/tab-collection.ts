import {ITab, ITabCollection} from "../types";

export class TabCollection implements ITabCollection {
    constructor(readonly collectionIndex: number) {
    }

    active: number = 0;
    list: Readonly<ITab[]> = [];

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

    removeLast(): boolean {
        if (this.list.length === 0) {
            return false;
        }
        const removedIndex = this.list.length - 1;
        if (this.isActive(removedIndex)) {
            this.toggle(removedIndex - 1)
        }
        this.list.pop();
        return true;
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
