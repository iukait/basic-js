const { NotImplementedError } = require('../extensions/index.js');

/**
   * In the popular Minesweeper game you have a board with some mines and those cells
   * that don't contain a mine have a number in it that indicates the total number of mines
   * in the neighboring cells. Starting off with some arrangement of mines
   * we want to create a Minesweeper game setup.
   *
   * @param {Array<Array>} matrix
   * @return {Array<Array>}
   *
   * @example
   * matrix = [
   *  [true, false, false],
   *  [false, true, false],
   *  [false, false, false]
   * ]
   *
   * The result should be following:
   * [
   *  [1, 2, 1],
   *  [2, 1, 1],
   *  [1, 1, 1]
   * ]
   */
function minesweeper(matrix) {

  const rows = matrix.length;
  const cols = matrix[0].length;

  const newMatrix = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === true) {
        newRow.push(1); // Если в ячейке есть мина, устанавливаем 1
      } else {
        // Считаем количество мин вокруг ячейки
        let count = 0;
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            const ni = i + x;
            const nj = j + y;
            if (
              ni >= 0 && ni < rows &&
              nj >= 0 && nj < cols &&
              matrix[ni][nj] === true
            ) {
              count++;
            }
          }
        }
        newRow.push(count);
      }
    }
    newMatrix.push(newRow);
  }
  return newMatrix
}



module.exports = {
  minesweeper
};
