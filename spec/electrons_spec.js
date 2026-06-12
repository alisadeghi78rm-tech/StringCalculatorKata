describe("Electrons", function() {
  var game;

  beforeEach(function() {
    game = new Electrons();
  });

  /* Todo List:
    - [1, 2, 3, 4, 5] => 6
    - [2, 2, 3, 3] => 4
    - [6, 6, 4, 4, 1, 3] => 2
    - [3, 5, 3, 5, 4, 2] => 12
  */

    it("should return 6 for [1, 2, 3, 4, 5]", function() {
    expect(game.calculate([1, 2, 3, 4, 5])).toEqual(6);
    });

    it("should return 4 for [2, 2, 3, 3]", function() {
    expect(game.calculate([2, 2, 3, 3])).toEqual(4);
    });
});