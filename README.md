## shufflebag

In games, random feels too random, using a shuffle-bag allows you give a fair representation of randomness.

It shuffles the inputs (an example being different types of attack bonuses, such as critical strikes and normal strikes) the output being pulled from the bag.


when the bag is empty it automatically reshuffles a fresh bag.

while it must add some extra CPU cycles in comparison to a single Math.random, it gives the user a fair representation of fair randomness.

impl:
if its an array, just divide up and Shuffle the bag
if it is an object, use keys as items and value as weights, if not int value use as weighted 1.0


TODO: if a value is less than 1, we need to normalise everything to make that 0.221323 to one and everything else in relation



####Install
	npm install giffo-shufflebag


####Usage
	
	var ShuffleBag = require("giffo-shufflebag"); 
	
	var attacks = {"attack":20, "critical hit":4, "hero attack":1};
	
	var attackBag = new ShuffleBag(attacks);
	
	var nextAttack = attackBag.next();