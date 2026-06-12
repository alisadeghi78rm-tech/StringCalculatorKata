function HelpAlf() {}

HelpAlf.prototype.findSpaceship = function(map) {
  if (map.indexOf('X') === -1) {
    return "Spaceship lost forever.";
  }

  var lines = map.split('\n'); // KEIN reverse()
  // Wir zählen von unten nach oben:
  for (var i = 0; i < lines.length; i++) {
    var y = lines.length - 1 - i; // Mathematische Umrechnung für y
    var x = lines[i].indexOf('X');
    if (x !== -1) {
      return [x, y];
    }
  }
};