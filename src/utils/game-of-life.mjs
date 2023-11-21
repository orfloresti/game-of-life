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
  let counter = 0;
  for (let r = rowIndex - 1; r <= rowIndex + 1; r++) {
    for (let c = colIndex - 1; c <= colIndex + 1; c++) {
      if (r >= 0 && r < rowLimit && c >= 0 && c < colLimit) {
        if(matrix[r][c]){
          counter = counter + 1;
        }
      }
    }
  }
  
  if(cell) {
    counter = counter - 1;
    if( counter > 3) {
      return false;
    }
    if ( counter <= 1) {
      return false;
    }

    if( counter === 2 || counter === 3) {
      return true;
    }
  }

  if(!cell) {
    if(counter === 3) {
      return true;
    }
  }

};