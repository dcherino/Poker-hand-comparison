import checkSuits from "../methods/checkSuits";
import { PokerHand } from "../PokerHand";

describe("Check if all cards are the same suit", () => {
  it("should return true if all suit are the same", () => {
    const hand = new PokerHand("2H 3H QH 8H JH");

    expect(checkSuits(hand.handValues.suits)).toBe(true);
  });

  it("should fail if they are not same suit", () => {
    const hand = new PokerHand("2H 3C 3H 4H 6H");

    expect(checkSuits(hand.handValues.suits)).toBe(false);
  });
});
