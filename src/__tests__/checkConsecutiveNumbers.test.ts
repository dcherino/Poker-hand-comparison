import PokerHand from "../PokerHand";
import checkConsecutiveNumbers from "../methods/checkConsecutiveNumbers";

describe("Check if numbers are consecutive", () => {
  it("should be consecutive", () => {
    const hand = new PokerHand("8H 9C TD JH QC");

    expect(checkConsecutiveNumbers(hand.handValues.faces)).toBe(true);
  });

  it("should fail is not consecutive", () => {
    const hand = new PokerHand("2H 3C 4D 5H 7C");

    expect(checkConsecutiveNumbers(hand.handValues.faces)).toBe(false);
  });
});
