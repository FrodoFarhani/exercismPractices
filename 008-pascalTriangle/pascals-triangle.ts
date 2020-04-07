export default class Triangle {
  rows: number[][];
  lastRow: number[];

  constructor(n: number) {
    this.rows = this.calculateRows(n);
    this.lastRow = this.rows[n - 1];
  }
  calculateRows(length: number): number[][] {
    const row0: number[] = [1];
    let rowBefore: number[] = row0;
    let rowCurrent: number[] = [];
    const result: number[][] = [row0];

    if (length == 1) return [row0];

    for (let index = 0; index < length - 1; index++) {
      rowCurrent = this.calcOneRow(rowBefore);
      rowBefore = rowCurrent;
      result.push(rowCurrent);
    }

    return result;
  }

  private calcOneRow(lastRow: number[]) {
    let row: number[] = [];
    let prevItem = 0;

    row = lastRow.map(item => {
      const sum = prevItem + item;
      1;
      prevItem = item;
      1;
      return sum;
    });
    row.push(1);

    return row;
  }
}
