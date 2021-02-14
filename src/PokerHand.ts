import { HandType } from "./types";
import { CARD_VALUES, RESULT } from "./constants";
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
        acc.suits.push(currentCard[1]);
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
    console.log("Hand 1: ", hand1);
    console.log("Hand 2: ", hand2);

    if (hand1 === 0 && hand2 === 0) {
      const hand1MaxValue = getHigherCard(this.handValues.faces);
      const hand2MaxValue = getHigherCard(comparedHand.handValues.faces);

      console.log("MaxHand 1: ", hand1MaxValue);
      console.log("MaxHand 2: ", hand2MaxValue);

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

const hand1 = new PokerHand("5C QD 3S 4D 8C");
const hand2 = new PokerHand("QS 3D 4S 5D 2C");

console.log(hand1.compareWith(hand2));

export default PokerHand;
