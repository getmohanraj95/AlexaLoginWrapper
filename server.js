var express = require('express');
var app = express();
var datafile = require('./data.json');
var jsonfile = require('jsonfile');
var path = require('path');
var url = require('url');
var port = process.env.PORT || 8080;
var request = require("request");


app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {
	console.log(datafile.data);
	//res.send('helo mhha')
	const urlObj = url.parse(req.url)

	if(req.query.client_id ==='828225850885-kaka1030svjtfjtjfndpmm13mjkpb2d0.apps.googleusercontent.com' && !req.query.client_secret ) {
		console.log("get 1")
		res.redirect('https://accounts.google.com/o/oauth2/v2/auth?scope=' + req.query.scope+' &include_granted_scopes=true&access_type=offline&state='+ req.query.state+'&redirect_uri=https://alexa-login-wrapper.herokuapp.com&response_type=code&client_id='+ req.query.client_id);
	}

	else if(req.query.access_token) {

		console.log("get 4")
		console.log(req.body);

		res.redirect('https://layla.amazon.com/api/skill/link/M28YSGJKH151MO');


	}

	else if(req.query.code) {
		console.log("get 2")

		res.redirect('https://layla.amazon.com/api/skill/link/M28YSGJKH151MO?state='+req.query.state + '&code=' + req.query.code);

		//res.redirect('www.googleapis.com/oauth2/v4/token?code=4/YQHgNlELY8MdSvhg1MyHvRi8A8-WefjuEsfsoKjtemC2e0_WSMUrHSuq0E_s09p0-We7z4wnca6JSmi6yD2xUZA#&client_id=828225850885-kaka1030svjtfjtjfndpmm13mjkpb2d0.apps.googleusercontent.com&client_secret=ipJjuOPeW4kwdQvLFiPBnVq9&redirect_uri=https://alexa-login-wrapper.herokuapp.com&grant_type=authorization_code');

	}

});


app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
})
















// var options = { method: 'POST',
// 		url: 'http://www.googleapis.com/oauth2/v4/token',
// 		qs: { code: '4/YQHgNlELY8MdSvhg1MyHvRi8A8-WefjuEsfsoKjtemC2e0_WSMUrHSuq0E_s09p0-We7z4wnca6JSmi6yD2xUZA' },
// 		headers:
// 		{ 'Postman-Token': '659a66e2-95a1-4306-a720-d92b93b3b34d',
// 			'cache-control': 'no-cache',
// 			'content-type': 'application/x-www-form-urlencoded' } };

// 		request(options, function (error, response, body) {
// 		if (error) throw new Error(error);
// 			ab = body;
// 		console.log(body);

// 		});

// 		res.send(ab);

