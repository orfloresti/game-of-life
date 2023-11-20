// Example
export const matrix = [
  [false, false, false, false, false, false, false, false, false, false,],
  [false, false, false, false, false, false, false, false, false, false,],
  [false, true, true, true, false, false, false, false, false, false,],
  [false, false, false, false, false, false, false, false, false, false,],
  [false, false, false, false, false, false, false, false, false, false,],
  [false, false, false, false, false, false, false, false, false, false,],
  [false, false, true, false, false, false, false, false, false, false,],
  [false, false, true, false, false, false, false, false, false, false,],
  [false, false, true, false, false, false, false, false, false, false,],
  [false, false, false, false, false, false, false, false, false, false,],
];

// Get new matrix
export const lifeStep = (matrix) => {
  const rowLimit = matrix.length;
  const colLimit = matrix[0].length;

  return matrix.map((row, rowIndex) => {
    return row.map((cell, colIndex) => {
      return cellDecision(
        matrix,
        cell,
        rowIndex,
        colIndex,
        rowLimit,
        colLimit
      );
    });
  });
};

// TODO: Fix this logic to use booleans inteand of numbers
const cellDecision = (matrix, cell, rowIndex, colIndex, rowLimit, colLimit) => {
  let counter = 0;
  for (let r = rowIndex - 1; r <= rowIndex + 1; r++) {
    for (let c = colIndex - 1; c <= colIndex + 1; c++) {
      if (r >= 0 && r < rowLimit && c >= 0 && c < colLimit) {
        // counter += r === rowIndex && c === colIndex ? 0 : matrix[r][c];
        if(matrix[r][c] && r !== rowIndex && c !== colIndex){
          counter = counter + 1;
        }
      }
    }
  }

  if (cell === false && counter === 3) return true;
  if (cell === true && (counter === 2 || counter === 3)) return true;
  return false;
};