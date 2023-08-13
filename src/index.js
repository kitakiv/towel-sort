
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let arr = [];
    if (matrix.length === 0) {
        return arr
    }
    for (let i = 1; i < matrix.length; i += 2) {
        matrix[i] = matrix[i].reverse();
    }
    arrCopy = arr.concat(...matrix);
    return arrCopy;
  }
