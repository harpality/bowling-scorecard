// create Bowling class object to intialize gamescoring
export class Bowling {
  constructor() {
    // rolls is the array of total rolls in the entire game
    this.rolls = [];
  }
  // this method takes in the amount of pins hit and will put them into the rolls array
  addRoll(pins) {
    this.rolls.push(pins);
  }
  //main scoring algorithm to calculate total score for the game
  getScore() {
    let score = 0;
    //iterate through two different indices in the rolls array which will include 10 frame arrays.
    for (
      let frameIndex = 0, rollIndex = 0;
      frameIndex < 10;
      frameIndex++, rollIndex += 2
    ) {
      // the first roll of the frame will be added to the score and so will the second roll by increasing the index
      score += this.rolls[rollIndex];
      score += this.rolls[rollIndex + 1];

      // if a spare is rolled within a frame (10 pins total), add the score of the following 1st index of frame
      if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) {
        score += this.rolls[rollIndex + 2];
      }
    }
    return score;
  }
}
