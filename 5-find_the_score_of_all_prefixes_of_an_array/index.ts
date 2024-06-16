function findPrefixScore(nums: number[]): number[] {
	const conver: number[] = [];
	const score: number[] = [];
	let currMaxNum = 0;

	nums.forEach((num, numIdx) => {
		if (num > currMaxNum) {
			currMaxNum = num;
		}

		const result = num + currMaxNum;
		conver.push(result);

		if (numIdx === 0) return score.push(result);
		score.push(score[numIdx - 1] + result);
	});

	return score;
}

console.log('SCORE 1 -> ', findPrefixScore([2, 3, 7, 5, 10]));
console.log('SCORE 2 -> ', findPrefixScore([1, 1, 2, 4, 8, 16]));
