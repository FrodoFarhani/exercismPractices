export default class Triangle {
  readonly rows: number[][];

  constructor(size: number) {
    this.rows = this.calcRows(size);
  }
  get lastRow(): number[] {
    return this.rows[this.rows.length - 1];
  }
  calcRows(size: number): number[][] {
    const rows = [[1]];
    for (let l = 2; l <= size; l++) {
      const lastRow = rows[rows.length - 1];
      rows.push(this.calcOneRow(l, lastRow));
    }
    return rows;
  }
  private calcOneRow(l: number, lastRow: number[]): number[] {
    return Array.from(
      { length: l },
      (_, i) => (lastRow[i - 1] || 0) + (lastRow[i] || 0)
    );
  }
}
