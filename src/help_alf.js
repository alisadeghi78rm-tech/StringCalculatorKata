function HelpAlf() {}

HelpAlf.prototype.findSpaceship = function(map) {
  if (map.indexOf('X') === -1) {
    return "Spaceship lost forever.";
  }
  var lines = map.split('\n').reverse(); // Drehen, da 0,0 unten ist
  for (var y = 0; y < lines.length; y++) {
    var x = lines[y].indexOf('X');
    if (x !== -1) {
      return [x, y];
    }
  }
};