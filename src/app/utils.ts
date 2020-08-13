
export function maxInNumberArray<T extends number[] | Iterable<number>>(arr: T): number {
    return [...arr].reduce((accumulator, currentValue) => currentValue > accumulator ? currentValue : accumulator, -1);
}
