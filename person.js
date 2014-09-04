var	me1 = { names: "Andrea",
age: 4,
favoritecolor: "purple",
hobby: "cooking",
firstWord: "ma"
}; 

/* console.log (me1["names"]);
console.log (person["age"]);

person["age"]=12
person["names"]= "football"

console.log (person["names"]);
console.log (person["age"]);*/

//list variables

console.log ("My name is\ " + me1["names"] + ". " +
"I will be\ " + me1["age"] + "\ years old." + " " +
"I love\ "  + me1["hobby"] + ". ");
		

var speak = function (person, firstWord) {
	console.log (person["names"] + " says \" " + firstWord + " \" for the first time")
}
speak(me1, me1["firstWord"])