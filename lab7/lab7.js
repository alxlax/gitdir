var assert = require('assert');
//var blanket = require('blanket');

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
describe('celciusTester', function(){

	before(function(){
		console.log('tests about to start');
	})

	it('should return 50 when fahrenheit is 122', function(){
		assert.equal(toCelsius(122), 50);
	})
	after(function(){
		console.log('tests complete!');
	})
})


function factorial (n){
	if ( n==0 || n== 1){
		return 1;
	}
	return factorial(n-1) * n;
}
function catalan (n){
	return factorial(2*n) / (factorial(n+1)*factorial(n));
}

describe('catalanTester', function(){

	before(function(){
		console.log('tests about to start');
	})

	it('should return 5 when n is 3', function(){
		assert.equal(catalan(3), 5);
	})
	it('should return 14 when n is 4', function(){
		assert.equal(catalan(4), 14);
	})
	it('should return 42 when n is 5', function(){
		assert.equal(catalan(5), 42);
	})
	after(function(){
		console.log('tests complete!');
	})
})
