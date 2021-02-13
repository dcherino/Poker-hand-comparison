import { HandType } from "./types";
import { RESULT, CARD_VALUE, HAND_TYPE } from "./constants";

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
        suits: [],
      }
    );
  }
}

export default PokerHand;
