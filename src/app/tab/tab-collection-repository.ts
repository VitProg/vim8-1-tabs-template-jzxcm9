import {ITabCollection, ITabCollectionRepository} from './types';
import {isUndefined, maxInNumberArray} from '../utils';
import {TabCollection} from './tab-collection';

export class TabCollectionRepository implements ITabCollectionRepository {
    protected map = new Map<number, ITabCollection>();

    get length() {
        return this.map.size;
    }

    get list(): ITabCollection[] {
        return [...this.map.values()];
    }

    add(collectionIndex?: number): ITabCollection {
        if (isUndefined(collectionIndex)) {
            collectionIndex = maxInNumberArray(this.map.keys()) + 1;
        }
        const collection = new TabCollection(collectionIndex);
        this.map.set(collectionIndex, collection);
        return collection;
    }

    get(collectionIndex: number): ITabCollection | undefined {
        return this.map.get(collectionIndex);
    }

    has(collectionIndex: number): boolean {
        return this.map.has(collectionIndex);
    }

}
