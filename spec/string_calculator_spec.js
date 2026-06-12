describe("StringCalculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new StringCalculator();
  });

  it("should return 0 for an empty string", function() {
    expect(calculator.add("")).toEqual(0);
  });

  it("should return the number when a single number is passed", function() {
    expect(calculator.add("1")).toEqual(1);
  });
});
