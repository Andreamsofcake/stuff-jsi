var personNames = {
	"0": 'Austin',
	"1": 'Leslie',
	"2": 'Matt',
	"3": 'Kali',
	"4": 'Steve',
	"5": 'Whit'
};

var sayNumber = function(names, n) {
  console.log(names[n] + " says " + n.toString());
};

var continueCounting = function (names, n) {
	if (n < 5) {
		sayNumber(names, n+1);
		continueCounting(names, n+1)
	};	
};

var startCounting = function(names, n) {
  sayNumber(names, n);
  continueCounting(names, n);


};

startCounting(personNames, 0);


// sayNumber(1);
// sayNumber(2);