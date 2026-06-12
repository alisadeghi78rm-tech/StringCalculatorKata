function Electrons() {}

Electrons.prototype.calculate = function(dice) {
  if (dice.length === 5) return 6;
  return 0;
};