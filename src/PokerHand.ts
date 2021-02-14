import { HandType, Suits } from "./types";
import { RESULT } from "./constants";
import checkHand from "./methods/checkHand";
import getHigherCard from "./methods/getHigherCard";

export class PokerHand {
  hand: Array<string>;
  handValues: HandType;

  constructor(handString: string) {
    this.hand = handString.split(" ");
    this.handValues = this.hand.reduce(
      (acc: HandType, currentCard: string) => {
        acc.faces.push(currentCard[0]);
        acc.suits.push(currentCard[1] as Suits);
        return acc;
      },
      {
        faces: [],
        suits: []
      }
    );
  }

  compareWith(comparedHand: PokerHand) {
    const hand1: number = checkHand(this.handValues);
    const hand2: number = checkHand(comparedHand.handValues);

    // HighCard: Compare higher value of cards if no other option is available
    if (hand1 === 0 && hand2 === 0) {
      const hand1MaxValue = getHigherCard(this.handValues.faces);
      const hand2MaxValue = getHigherCard(comparedHand.handValues.faces);

      if (hand1MaxValue > hand2MaxValue) {
        return RESULT.WIN;
      } else if (hand2MaxValue > hand1MaxValue) {
        return RESULT.LOSS;
      } else {
        return RESULT.TIE;
      }
    }

    if (hand1 > hand2) {
      return RESULT.WIN;
    } else if (hand2 > hand1) {
      return RESULT.LOSS;
    } else {
      return RESULT.TIE;
    }
  }
}

export default PokerHand;
