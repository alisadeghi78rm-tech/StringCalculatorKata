// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	if(string_numbers === ""){
		return 0;
	}
	var numbers = string_numbers.split(",");
  	var sum = 0;
  		for (var i = 0; i < numbers.length; i++) {
    	sum += parseInt(numbers[i]);
  		}
  	return sum;
};
