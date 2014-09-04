var	me1 = { 
	name: "Andrea",
	age: 4,
	favoritecolor: "purple",
	hobby: "cooking",
	firstWord: "ma"
}; 


/* console.log (me1["name"]);
console.log (person["age"]);

person["age"]=12;
person["name"]= "football"

console.log (person["name"]);
console.log (person["age"]);*/

//list variables

// console.log ("My name is\ " + me1["name"] + ". " +
// "I will be\ " + me1["age"] + "\ years old." + " " +
// "I love\ "  + me1["hobby"] + ". ");
		

var speak = function (person) {
	console.log (person["name"] + " says \"" + person["firstWord"] + "\" for the first time");
};

speak(me1);