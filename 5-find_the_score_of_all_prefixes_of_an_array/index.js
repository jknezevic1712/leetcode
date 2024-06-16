function findPrefixScore(nums) {
    var conver = [];
    var score = [];
    var currMaxNum = 0;
    nums.forEach(function (num, numIdx) {
        if (num > currMaxNum) {
            currMaxNum = num;
        }
        var result = num + currMaxNum;
        conver.push(result);
        if (numIdx === 0)
            return (score[numIdx] = result);
        score[numIdx] = score[numIdx - 1] + result;
    });
    return score;
}
console.log('SCORE 1 -> ', findPrefixScore([2, 3, 7, 5, 10]));
console.log('SCORE 2 -> ', findPrefixScore([1, 1, 2, 4, 8, 16]));
// 96, 88, 77
