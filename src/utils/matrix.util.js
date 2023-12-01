/**
 * Function to generate a matrix fulled with false
 * @param {*} rows
 * @param {*} columns
 * @returns
 */
export const generateMatrix = (rows, columns) => {
  let matrix = new Array(rows);

  for (let r = 0; r < rows; r++) {
    matrix[r] = new Array(columns);
    for (let c = 0; c < columns; c++) {
      matrix[r][c] = false;
    }
  }

  return matrix;
};
