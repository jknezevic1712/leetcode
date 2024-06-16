function findColumnWidth(grid: number[][]): number[] {
	const result: number[][] = [];

	grid[0].forEach((_, rowIdx) => {
		const tempArr: number[] = [];

		grid.forEach((row) => {
			tempArr.push(row[rowIdx]);
		});

		result.push(tempArr);
	});

	return result.map((col) =>
		Math.max(...col.map((rowEl) => rowEl.toString().length))
	);
}

const grid = [[1], [22], [333]];
const grid2 = [
	[-15, 1, 3],
	[15, 7, 12],
	[5, 6, -2],
];

findColumnWidth(grid);
findColumnWidth(grid2);

// ? Solution 2
// function findColumnWidth(grid: number[][]): number[] {
// 	return grid[0]
// 		.map((_, rowIdx) => grid.map((r) => r[rowIdx]))
// 		.map((c) => Math.max(...c.map((c) => c.toString().length)));
// }

// tsc index.ts; node index.js;
