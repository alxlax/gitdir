var assert = require('assert');
var blanket = require('blanket');
function stringToArray(str){
	return str.split(',');
}


describe('stringToArrayTester', function(){
	var str = 'a,b,c';

	it('should retun an array', function(){
		assert(Array.isArray(stringToArray(str)));
		//assert(false);
	})
})

function factorial (n){
	if ( n==0 || n== 1){
		return 1;
	}
	return factorial(n-1) * n;
}

describe('factoriaTester', function(){

	before(function(){
		console.log('tests about to start');
	})

	it('should return 1 when n is 0', function(){
		assert.equal(factorial(0), 1);
	})
	it('should return 1 when n is 1', function(){
		assert.equal(factorial(1), 1);
	})
	it('should return 120 when n is 5', function(){
		assert.equal(factorial(5), 120);
	})
	after(function(){
		console.log('tests complete!');
	})
})