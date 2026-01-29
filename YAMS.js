export class YAMS {
  score(rolls) {
    const roll = rolls[0]
    const allSame = roll.every(die => die === roll[0])

    if (allSame) return 50
    
    const sorted = [...new Set(roll)].sort((a, b) => a - b);
    const isLargeStraight =
      sorted.length === 5 &&
      sorted.every((value, index) =>
        index === 0 || value === sorted[index - 1] + 1
      );

    if (isLargeStraight) return 40;

    return roll.reduce((a, b) => a + b, 0)
  }
}

