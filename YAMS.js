export class YAMS {
  score(rolls) {
    const roll = rolls[0]
    const allSame = roll.every(die => die === roll[0])

    if (allSame) return 50
    return 0
  }
}

