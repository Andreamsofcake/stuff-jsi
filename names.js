var john = {
	name: 'John',
	favcolor: 'green'
};
var sarah = {
	name: 'Sarah',
	favcolor: 'mauve'
};

var convos = function (person, person2) {
	var intro = 'Hello, ' + person['name'] + '. ' + 'That is a nice ' + person['favcolor'] + ' sweater you have.\n' + 
	'Thanks ' + person2['name'] + ', ' + person['favcolor'] + ' is my favorite color.';
	
	return intro
};

var conversation = convos(sarah, john);

console.log (conversation)