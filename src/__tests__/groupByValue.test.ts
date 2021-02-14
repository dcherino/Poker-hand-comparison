import PokerHand from "../PokerHand";
import groupByValue from "../methods/groupByValue";

describe("Counting occurrences per card value (face)", () => {
  it("should return and array with 13 items sorted desc.", () => {
    const hand = new PokerHand("AH AC AS 8H 8D");
    const ex = [3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    expect(groupByValue(hand.handValues.faces)).toStrictEqual(ex);
  });
});
