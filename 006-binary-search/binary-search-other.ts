export default class BinarySearch {
  array: number[];

  constructor(input: number[]) {
    if (this.isSorted(input)) {
      this.array = input;
    }
  }

  isSorted(input: number[]): boolean {
    if (input.length <= 1) {
      return true;
    }
    for (let i = 1; i < input.length; i++) {
      if (input[i - 1] > input[i]) {
        return false;
      }
    }
    return true;
  }

  indexOf(target: number): number {
    let left: number = 0;
    let right: number = this.array.length - 1;
    while (left < right) {
      let mid: number = left + Math.floor((right - left) / 2);
      if (this.array[mid] === target) {
        return mid;
      } else if (this.array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
}
