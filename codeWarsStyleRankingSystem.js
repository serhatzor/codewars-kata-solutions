/*
Problem URL 
https://www.codewars.com/kata/51fda2d95d6efda45e00004e
*/

class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(completedRanked) {
    if (completedRanked < -8 || completedRanked > 8 || completedRanked == 0) {
      throw "OutOfRankRange";
    }
    let minusOfRankes = completedRanked - this.rank;
    if (completedRanked > 0 && this.rank < 0) {
      minusOfRankes--;
    }
    let addedProgress = 1;
    if (minusOfRankes == 0) {
      addedProgress = 3;
    } else if (minusOfRankes >= 1) {
      addedProgress = 10 * minusOfRankes * minusOfRankes;
    }
    this.calculateNewValues(addedProgress);
  }

  calculateNewValues(p) {
    let totalProgress = this.progress + p;
    let newAddedRank = Math.floor(totalProgress / 100);
    this.progress = totalProgress % 100;
    let isUnderZero = this.rank < 0;
    this.rank += newAddedRank;
    if (this.rank >= 0 && isUnderZero) {
      this.rank++;
    }
    if (this.rank >= 8) {
      this.rank = 8;
      this.progress = 0;
    }
  }
}
