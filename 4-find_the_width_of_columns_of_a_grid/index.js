function findColumnWidth(grid) {
    var columnsWidth = [];
    grid[0].forEach(function (_, rowIdx) {
        var tempArr = [];
        grid.forEach(function (row) {
            tempArr.push(row[rowIdx]);
        });
        columnsWidth.push(tempArr);
    });
    // columnsWidth = columnsWidth.map((col) =>
    // 	Math.max(...col.map((rowEl) => rowEl.toString().length))
    // );
    console.log('1 ', columnsWidth);
    console.log('2 ', grid[0].map(function (_, rowIdx) { return grid.map(function (r) { return r[rowIdx]; }); }));
    // columnsWidth = grid[0]
    // 	.map((_, rowIdx) => grid.map((r) => r[rowIdx]))
    // 	.map((c) => Math.max(...c.map((c) => c.toString().length)));
    return columnsWidth;
}
var grid = [[1], [22], [333]];
var grid2 = [
    [-15, 1, 3],
    [15, 7, 12],
    [5, 6, -2],
];
findColumnWidth(grid);
findColumnWidth(grid2);
