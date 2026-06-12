function HelpAlf() {}

HelpAlf.prototype.findSpaceship = function(map) {
  if (map.indexOf('X') === -1) {
    return "Spaceship lost forever.";
  }
};