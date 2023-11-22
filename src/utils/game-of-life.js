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

/**
 * 
 * @param {*} matrix 
 * @param {*} cell 
 * @param {*} rowIndex 
 * @param {*} colIndex 
 * @param {*} rowLimit 
 * @param {*} colLimit 
 * @returns 
 */
const cellDecision = (matrix, cell, rowIndex, colIndex, rowLimit, colLimit) => {
  const rowStart = rowIndex - 1 < 0 ? 0 : rowIndex - 1;
  const rowEnd = rowIndex + 1 > rowLimit - 1 ? rowLimit - 1 : rowIndex + 1;
  const colStart = colIndex - 1 < 0 ? 0 : colIndex - 1;
  const colEnd = colIndex + 1 > colLimit - 1 ? colLimit - 1 : colIndex + 1;
  
  let neighbors = 0;
  for (let row = rowStart; row <= rowEnd; row++) {
    for (let col = colStart; col <= colEnd; col++) {
      if(row === rowIndex && col === colIndex) {
        continue;
      }
      if(matrix[row][col]){
        neighbors = neighbors + 1;
      }
    }
  }
  
  if(cell) {
    if( neighbors > 3) {
      return false;
    }
    if ( neighbors <= 1) {
      return false;
    }

    if( neighbors === 2 || neighbors === 3) {
      return true;
    }
  }

  if(!cell) {
    if(neighbors === 3) {
      return true;
    }
  }

};