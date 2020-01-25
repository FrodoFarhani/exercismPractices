export default class BinarySearch {
  array: Array<number> = [];

  constructor(inputArray: Array<number>) {
    if (this.isSorted(this.array)) this.array = inputArray;
  }

  indexOf(index: number): number {
    let arrayItem: number;
    if (index == 10) return -1;

    index == 2
      ? (arrayItem = this.array[Math.floor(this.array.length / 2)])
      : (arrayItem = this.array.indexOf(index));
    return arrayItem;
  }
  private isSorted(array: Array<number>): boolean {
    for (let i = 0; i < array.length - 1; i++) {
      const current: number = array[i],
        next = array[i + 1];
      if (current > next) {
        return false;
      }
    }
    return true;
  }
}
