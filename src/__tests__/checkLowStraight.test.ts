import PokerHand from "../PokerHand";
import checkLowStraight from "../methods/checkLowStraight";

describe("Check if the hand is low straight", () => {
  it("should be low straight", () => {
    const hand = new PokerHand("AC 2H 3H 4D 5H");

    expect(checkLowStraight(hand.handValues.faces)).toBe(true);
  });

  it("should fail is not low straight", () => {
    const hand = new PokerHand("AC 2H 3H 5D 6H");

    expect(checkLowStraight(hand.handValues.faces)).toBe(false);
  });
});
