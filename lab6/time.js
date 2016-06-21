var http = require('http');

req = http.request(options, callback);

var options = {

	host: 'api.timezonedb.com',
	path: '/v2/list-time-zone?key=B7VKUSBJ2DJR&format=json',
	port: '80',
	method: 'GET',
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

/*var postData = {
	firstDataKey: 'firstDataValue'
}

req.write(postData);*/

req.end();

