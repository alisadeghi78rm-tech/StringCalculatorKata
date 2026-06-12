describe("HelpAlf", function() {
  var alf;

  beforeEach(function() {
    alf = new HelpAlf();
  });

  /* 
    Todo List:
    - Should return "Spaceship lost forever." if the spaceship 'X' is not in the map
    - Should return [0, 0] if 'X' is at bottom left
    - Should return [7, 2] for the example map
  */

    it("should return 'Spaceship lost forever.' if the spaceship 'X' is not in the map", function() {
    var emptyMap = "....\n....";
    expect(alf.findSpaceship(emptyMap)).toEqual("Spaceship lost forever.");
    });

    it("should return [0, 0] if 'X' is at the bottom left", function() {
    var map = "....\n....\nX..."; 
    expect(alf.findSpaceship(map)).toEqual([0, 0]);
    });

});