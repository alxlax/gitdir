
function getRandomMove(size, board, lastMove, cb){

var http = require("http");

    // TODO: Implement me...

    // See https://nodejs.org/api/http.html#http_http_request_options_callback

    req = http.request(options, callback);

var options = {

	host: 'roberts.seng.uvic.ca',
	path: '/ai/random',
	port: '30000',
	method: 'POST',
	headers: {
    'Content-Type': 'application/json' 
  }
}

var callback = function(response){
	var str;
	response.on('data', function(chunk){
		str+= chunk;
		console.log(chunk.toString());
	});
	response.on('end', function(){
		console.log(str);
		console.log('no  more data')
	});
}

var postData = {
	firstDataKey: 'firstDataValue'
}



req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData.toString());
req.end();



}

module.exports = {
    getRandomMove : getRandomMove
}