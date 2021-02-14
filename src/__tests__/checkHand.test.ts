import PokerHand from "../PokerHand";
import checkHand from "../methods/checkHand";
import { HAND_TYPE } from "../constants";

describe("Check hand type to determine a winner", () => {
  it("should return High card", () => {
    const hand = new PokerHand("AS 8D 6H TD 3H");
    const type = "highcard";

    expect(checkHand(hand.handValues)).toBe(HAND_TYPE.indexOf(type));
  });

  it("should return Pair", () => {
    const hand = new PokerHand("AS AD 6H TD 3H");
    const type = "pair";

    expect(checkHand(hand.handValues)).toBe(HAND_TYPE.indexOf(type));
  });

  it("should return Two Pairs", () => {
    const hand = new PokerHand("AS AD 6H 6D 3H");
    const type = "two_pairs";

    expect(checkHand(hand.handValues)).toBe(HAND_TYPE.indexOf(type));
  });

  it("should return Three of a kind", () => {
    const hand = new PokerHand("AS AD AH TD 3H");
    const type = "three_of_a_kind";

    expect(checkHand(hand.handValues)).toBe(HAND_TYPE.indexOf(type));
  });

  it("should return Straight", () => {
    const hand = new PokerHand("2S 3D 4H 5D 6H");
    const type = "straight";

    expect(checkHand(hand.handValues)).toBe(HAND_TYPE.indexOf(type));
  });

  it("should return a Low Straight (Ace as 1)", () => {
    const hand = new PokerHand("AS 2D 3H 4D 5H");
    const type = "straight";

    expect(checkHand(hand.handValues)).toBe(HAND_TYPE.indexOf(type));
  });

  it("should return Flush", () => {
    const hand = new PokerHand("AS 3S 7S JS QS");
    const type = "flush";

    expect(checkHand(hand.handValues)).toBe(HAND_TYPE.indexOf(type));
  });

  it("should return Full House", () => {
    const hand = new PokerHand("AS AD AH 5D 5H");
    const type = "full_house";

    expect(checkHand(hand.handValues)).toBe(HAND_TYPE.indexOf(type));
  });

  it("should return Four of a kind", () => {
    const hand = new PokerHand("AS AD AH AC 3H");
    const type = "four_of_a_kind";

    expect(checkHand(hand.handValues)).toBe(HAND_TYPE.indexOf(type));
  });

  it("should return Straight flush", () => {
    const hand = new PokerHand("7S 8S 9S TS JS");
    const type = "straight_flush";

    expect(checkHand(hand.handValues)).toBe(HAND_TYPE.indexOf(type));
  });

  it("should return Royal flush", () => {
    const hand = new PokerHand("AS KS QS JS TS");
    const type = "royal_flush";

    expect(checkHand(hand.handValues)).toBe(HAND_TYPE.indexOf(type));
  });
});
