function Electrons() {}

Electrons.prototype.calculate = function(dice) {
  var total = 0;
  for (var i = 0; i < dice.length; i++) {
    if (dice[i] === 3) {
      total += 2;
    } else if (dice[i] === 5) {
      total += 4;
    }
  }
  return total;
};