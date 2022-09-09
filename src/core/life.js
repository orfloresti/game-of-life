export const matrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

export const lifeStep = (matrix) => {
  const rowLimit = matrix.length;
  const colLimit = matrix[0].length;

  return matrix.map((row, rowIndex) => {
    return row.map((cell, colIndex) => {
      return cellDecision(matrix, cell, rowIndex, colIndex, rowLimit, colLimit);
    });
  });
};

const cellDecision = (matrix, cell, rowIndex, colIndex, rowLimit, colLimit) => {
  let counter = 0;
  for (let r = rowIndex - 1; r < rowIndex + 1; r++) {
    for (let c = colIndex - 1; c < colIndex + 1; c++) {
      if (r >= 0 && r < rowLimit && c >= 0 && c < colLimit){
          counter = counter + matrix[r][c];
      }
    }
  }

  if (cell === 0 && counter === 3) return 1;
  else if (cell === 1 && (counter === 2 || counter === 3)) return 1;
  else return 0;
};
