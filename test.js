// test

var ShuffleBag = require("giffo-shufflebag");

var objects = {"critical strike":3, "attack":16, "godly strike":1};
//objects = ["a","b","c","d"]; // array

var bag = new ShuffleBag(objects);


for (var i = 0; i <40; i++) {
	console.log(bag.next());
}



// TODO: testing .reset method

