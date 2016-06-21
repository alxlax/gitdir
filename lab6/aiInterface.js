
function getRandomMove(size, board, lastMove, cb){

var http = require("http");

    // TODO: Implement me...

    // See https://nodejs.org/api/http.html#http_http_request_options_callback

    req = http.request(options, callback);
    var postData = {
	//firstDataKey: 'firstDataValue'
	'size': size,
	'board': board,
	'last': lastMove,
}

var options = {

	host: 'roberts.seng.uvic.ca',
	path: '/ai/random',
	port: '30000',
	method: 'POST',
	headers: {
    'Content-Type': 'application/json' 
    //'Content-Length': Buffer.byteLength(postData)
  },
}

var callback = function(response){
	//var str;
	response.on('data', function(chunk){
		//str+= chunk;
		//console.log(chunk.toString());
		console.log('made it here');
	});
	response.on('end', function(){
		//console.log(str);
		console.log('no  more data')
	});
}




req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.write(JSON.stringify(postData));
req.end();



}

module.exports = {
    getRandomMove : getRandomMove
}