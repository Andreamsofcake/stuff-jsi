// var personNames = {
// 	"0": 'Austin',
// 	"1": 'Leslie',
// 	"2": 'Matt',
// 	"3": 'Kali',
// 	"4": 'Steve',
// 	"5": 'Whit'
// };
var person1 = {
	name: 'Austin',
	age: 3
}



var sayNumber = function(names, n) {
  console.log(names.name + " says " + n.toString());
};

var continueCounting = function (names, n) {
	if (names.age > 4) {
		if (n < 100) {
			sayNumber(names, n+1);
			continueCounting(names, n+1)
		};	
	};
	if (names.age === 4) {
		if (n < 20) {
			sayNumber(names, n+1);
			continueCounting(names, n+1)
		};	
	};
	if (names.age === 3) {
		if (n < 10) {
			sayNumber(names, n+1);
			continueCounting(names, n+1)
		};	
	};
};

var startCounting = function(names, n) {
  sayNumber(names, n);
  continueCounting(names, n);


};

startCounting(person1, 0);


