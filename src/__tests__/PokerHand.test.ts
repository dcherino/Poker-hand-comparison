import PokerHand from "../PokerHand";

describe("Compare hands and determine the winner", () => {
  it("should WIN", () => {
    const hand1 = new PokerHand("AS AD AC QS QD");
    const hand2 = new PokerHand("3S 3D 3H AH QH");

    expect(hand1.compareWith(hand2)).toBe(1);
  });

  it("should LOSE", () => {
    const hand1 = new PokerHand("AS AD AC QS QD");
    const hand2 = new PokerHand("3S 3D 3H 3C QH");

    expect(hand1.compareWith(hand2)).toBe(2);
  });

  it("should TIE", () => {
    const hand1 = new PokerHand("AS AD AC AH QD");
    const hand2 = new PokerHand("3S 3D 3H 3C QH");

    expect(hand1.compareWith(hand2)).toBe(3);
  });
});

describe("Compare the high card when no other option available", () => {
  it("should WIN", () => {
    const hand1 = new PokerHand("AS 3D 4C 2H 6D");
    const hand2 = new PokerHand("KS 2D JH 7C QH");

    expect(hand1.compareWith(hand2)).toBe(1);
  });

  it("should LOSE", () => {
    const hand1 = new PokerHand("7S 3D 4C 2H 6D");
    const hand2 = new PokerHand("KS 2D JH 7C QH");

    expect(hand1.compareWith(hand2)).toBe(2);
  });

  it("should TIE", () => {
    const hand1 = new PokerHand("AS 3D 4C 2H 6D");
    const hand2 = new PokerHand("AS 2D JH 7C QH");

    expect(hand1.compareWith(hand2)).toBe(3);
  });
});
