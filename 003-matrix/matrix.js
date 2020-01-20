//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {
    this.arrayRows = [];
    this.arrayCols = [];
    this.inputRows = input.split('\n');
    this.inputCols = input.split('\n')[0].split(' ');
  }
  createReverseMAtrixForCols() {
    for (let j = 0; j < this.inputCols.length; j++) {
      let tmp = [];
      for (let m = 0; m < this.inputRows.length; m++) {
        tmp.push(this.arrayRows[m][j]);
      }
      this.arrayCols.push(tmp);
    }
  }
  createMatrixFromInput() {
    for (let i = 0; i < this.inputRows.length; i++) {
      this.arrayRows.push(
        this.inputRows[i].split(' ').map(function(item) {
          return parseInt(item, 10);
        })
      );
    }
  }
  get rows() {
    this.createMatrixFromInput();
    return this.arrayRows;
  }

  get columns() {
    this.createMatrixFromInput();
    this.createReverseMAtrixForCols();
    return this.arrayCols;
  }
}
