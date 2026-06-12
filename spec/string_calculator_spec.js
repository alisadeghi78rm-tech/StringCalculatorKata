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

  it("should return the sum of two numbers separated by a comma", function() {
    expect(calculator.add("1,2")).toEqual(3);
  });

  it("should handle multiple digits and return the correct sum", function() {
    expect(calculator.add("1,27")).toEqual(28);
  });

  it("should handle three numbers separated by commas", function() {
    expect(calculator.add("15,17,21")).toEqual(53);
  });

  it("should handle four numbers separated by commas", function() {
    expect(calculator.add("1,5,27,45")).toEqual(78);
  });

  it("should handle multiple numbers with larger values", function() {
    expect(calculator.add("1,10,100,1000,10000")).toEqual(11111);
  });
});
