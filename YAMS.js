export class YAMS {
  score(rolls) {
    const roll = rolls[0]
    const allSame = roll.every(die => die === roll[0])

    if (allSame) return 50
    
    const sorted = [...roll].sort((a, b) => a - b);
    const isStraight15 =
      sorted[0] === 1 &&
      sorted[1] === 2 &&
      sorted[2] === 3 &&
      sorted[3] === 4 &&
      sorted[4] === 5;

    if (isStraight15) return 40;
    return roll.reduce((a, b) => a + b, 0)
  }
}

