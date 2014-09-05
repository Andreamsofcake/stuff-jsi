
var	types = ['apples', 'oranges', 'bananas'];
types.splice(0, 0, 'kiwi')

console.log(types);
console.log(types.length);


var indicateFruitThatNeedsPurchasing = function(fruit) {
  console.log('I need to purchase ' + fruit + '.');
};

var continueIndicatingFruitThatNeedsPurchasing = function(fruits, n) {
  var fruit = fruits[n+1]; //assigning new index//
  if ((n + 1) === fruits.length) {
  	//stop counting//
  } else 
  	{
	  indicateFruitThatNeedsPurchasing(fruit);
	  continueIndicatingFruitThatNeedsPurchasing(fruits, n+1);
	};
};

var startIndicatingFruitThatNeedsPurchasing = function(fruits) {
  var fruit = fruits[0]; //index//
  indicateFruitThatNeedsPurchasing(fruit);
  continueIndicatingFruitThatNeedsPurchasing(fruits, 0);
};

var yummyFruits = ['apples', 'oranges', 'bananas'];


startIndicatingFruitThatNeedsPurchasing(yummyFruits);



var indicateFruitThatWasPurchased = function(fruit) {
  console.log('I purhchased ' + fruit + '.');
};

var continueIndicationFruitThatWasPurchased = function(fruits, n) {
  var fruit = fruits[n+1];
  if ((n + 1) === fruits.length) {
  	//stop counting//
  } else 
  	{
	  indicateFruitThatWasPurchased(fruit);
	  continueIndicationFruitThatWasPurchased(fruits, n+1);
	};
};

var startIndicationFruitThatWasPurchased = function(fruits) {
  var fruit = fruits[0];
  indicateFruitThatWasPurchased(fruit);
  continueIndicationFruitThatWasPurchased(fruits, 0);
};

var purchasedFruits = ['apples', 'oranges']


startIndicationFruitThatWasPurchased(purchasedFruits);
