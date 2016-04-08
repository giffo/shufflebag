/*

In games, random feels too random, using a shuffle-bag allows you give a fair representation of randomness imo.

It shuffles the inputs (an example being different types of attack bonuses, such as critical strikes and normal strikes)
the output being pulled from the bag.

when the bag is empty it reshuffles

while it must add some extra cpu cycles in comparison to a single Math.random, it gives the user a fair repersentation of fair randomness.

impl:
if its an array, just divide up and Shuffle the bag
if it is an object, use keys has items and value as weights, if not int value use as weighted 1.0
*/

// TODO: if a value is less than 1, we need to normalise everything to make that 0.221323 to one and everything else in relation

var ShuffleBag = module.exports = function(items){

	var originalItems = prepareBag(items);
	var bag = [];

	function prepareBag(itemObject) {

		var itemArr = [];

		if(itemObject instanceof Array) {
			for (var i = 0; i < itemObject.length; i++) {
				itemArr.push(itemObject[i]);
			}
		} else {
			for(key in itemObject) {
				for(var i=0; i<itemObject[key]; i++) {
					itemArr.push(key);
				}
			}
		}
		
		return itemArr;
	}



	var shuffle = function(){
		bag = originalItems.slice(0);
		for (var i = 0; i < bag.length; i++) {
			swap(bag, i, Math.floor(Math.random() * bag.length));
		}
		//swap(bag, 0, Math.floor(Math.random() * bag.length))
		//swap(bag, bag.length-1, Math.floor(Math.random() * bag.length))

		function swap(arrt, a, b) {
			//console.log("swap " + a +" with " + b);
			var t = arrt[a];
			arrt[a] = arrt[b];
			arrt[b] = t;
		}
	};
	
	
	shuffle(); // the initial shuffle

	return {
		next:function(){
			if(bag.length === 0) {
				shuffle();
			}
			return bag.shift();
		}
	}
}


