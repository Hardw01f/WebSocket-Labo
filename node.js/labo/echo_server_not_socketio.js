

var net = require('net');

var server = net.createServer(function (socket){

		socket.write('THIS IS TEST\n');

		socket.on('data',function(data){
				socket.write(data);
				console.log("Received : %s",data)
		});

});

server.listen(3000);
