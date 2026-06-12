function HelpAlf() {}

HelpAlf.prototype.findSpaceship = function(map) {
  if (map.indexOf('X') === -1) {
    return "Spaceship lost forever.";
  }

  // Zeilen umkehren, damit die unterste Zeile Index 0 hat
  var lines = map.split('\n').reverse(); 
  
  for (var y = 0; y < lines.length; y++) {
    var x = lines[y].indexOf('X');
    if (x !== -1) {
      return [x, y];
    }
  }
};