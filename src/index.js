
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let result = [];

    matrix.map(  (item, index) => {
        index % 2 === 0 ? result.push(...matrix[index]) : result.push(...matrix[index].reverse());
    })
    return result;
}
