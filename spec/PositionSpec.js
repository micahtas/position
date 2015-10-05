/* globals position */

describe("Position", function() {
  var testList = [1, 3, 5, 6];

  it("when passed 5 should return 2", function() {
    expect(position(testList, 5)).toEqual(2);
  });

  it("when passed 2 should return 1", function() {
    expect(position(testList, 2)).toEqual(1);
  });

  it("when passed 7 should return 4", function() {
    expect(position(testList, 7)).toEqual(4);
  });

  it("when passed 0 should return 0", function() {
    expect(position(testList, 0)).toEqual(0);
  });
});
