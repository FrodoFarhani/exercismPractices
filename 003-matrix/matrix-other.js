'use strict';

function Matrix(input) {
  const thisRows = input.split('\n').map(row => row.split(' ').map(Number));

  return {
    rows: thisRows,
    columns: thisRows[0].map((col, i) => thisRows.map(row => row[i]))
  };
}

module.exports = Matrix;
