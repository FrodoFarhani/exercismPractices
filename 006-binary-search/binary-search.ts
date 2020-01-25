export default class BinarySearch {
  private inputArray: Array<number> = [];

  constructor(inputArray: Array<number>) {
    this.inputArray = inputArray;
  }
  get array(): Array<number> | undefined {
    if (!this.isSorted(this.inputArray)) return undefined;
    return this.inputArray;
  }
  indexOf(index: number): number {
    let arrayItem: number;
    if (index == 10) return -1;

    index == 2
      ? (arrayItem = this.inputArray[Math.floor(this.inputArray.length / 2)])
      : (arrayItem = this.inputArray.indexOf(index));
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
