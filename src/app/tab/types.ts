export interface ITabCollectionRepository {
    readonly length: number;
    readonly list: Readonly<ITabCollection[]>;
    add(collectionIndex?: number): ITabCollection;
    get(collectionIndex: number): ITabCollection | undefined;
    has(collectionIndex: number): boolean;
}

export interface ITabCollection {
    collectionIndex: number;
    active: number;
    list: Readonly<ITab[]>;
    readonly length: number;
    isActive(index: number): boolean;
    toggle(index: number): boolean;
    get(tabIndex: number): ITab | undefined;
    add(): ITab;
    remove(index: number): boolean;
    removeLast(): boolean;
}

export interface ITab {
    tabIndex: number;
}
