var http = require('http');
let pw = require('./creds')

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});

});
var port = Number(process.env.PORT || 3000)
server.listen(port);

var tmi = require ('tmi.js');

var options = {
	options: {
			debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "robsbrobot",
		password: `${pw}`
	},
	channels: ["eDONK"]
};

var client = new tmi.client(options);
client.connect();


client.on('chat', function(channel, user, message, self) {
	if(message === "!commands") {
		client.action("eDONK", "Current commands are, !podcast, !random, !builtby, !brandon");
	};
	if(message === "!podcast") {
		client.action("eDONK", "http://www.nerdturd.info/")
	};
	if(message === "!random") {
		var randomNum = Math.floor(Math.random() * 100) + 1;
		client.action("eDONK", "Your random number was " + randomNum);
	};
	if(message === "!builtby") {
		client.action("eDONK", "http://www.tylerdaniel.com");
	};
	if(message === "!brandon") {
<<<<<<< HEAD
		client.action("eDONK", 'Quote from Brandon, "I almost had sex with a tranny, she tricked me in the club, got her home to finally realize she was a dude.  I almost did it anyways."');
=======
		client.action("eDONK", 'Quote from Brandon, "Insert anything funny"');
>>>>>>> a71fd9cebccf46807b110a363d220e18c73d4f08
	};
	if(message === "!robsbrobot") {
		client.action('eDONK', user['display-name'] + " Please address me as Sir eDONK king of the North!");
		};
		});


client.on('connected', function(address, port) {
	client.action("eDONK", "Welcome Bros, I am robsbrobot, check out this app I made http://bit.ly/1rqkkwQ");
});
<<<<<<< HEAD

=======
>>>>>>> a71fd9cebccf46807b110a363d220e18c73d4f08
