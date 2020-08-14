
export function maxInNumberArray<T extends number[] | Iterable<number>>(arr: T): number {
    return [...arr].reduce((accumulator: number, currentValue: number) => currentValue > accumulator ? currentValue : accumulator, -1);
}

export function isUndefined(value: any): value is undefined {
    return typeof value === 'undefined';
}
