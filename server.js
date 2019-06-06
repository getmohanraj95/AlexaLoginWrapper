var express = require('express');
var app = express();
var fs = require('fs');
var jsonfile = require('jsonfile');
var path = require('path');
var url = require('url');
var port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {

	const urlObj = url.parse(req.url)

	if(req.query.client_id ==='828225850885-kaka1030svjtfjtjfndpmm13mjkpb2d0.apps.googleusercontent.com' && !req.query.client_secret ) {

		res.redirect('https://accounts.google.com/o/oauth2/v2/auth?scope=' + req.query.scope+' &include_granted_scopes=true&access_type=offline&state='+ req.query.state+'&redirect_uri=https://alexa-login-wrapper.herokuapp.com&response_type=code&client_id='+ req.query.client_id);
	}

	if(req.query.code) {

		console.log('https://layla.amazon.com/api/skill/link/M28YSGJKH151MO?state='+req.query.state + '&code=' + req.query.code);

		res.redirect('https://layla.amazon.com/api/skill/link/M28YSGJKH151MO?state='+req.query.state + '&code=' + req.query.code);

	}

	if(req.query.client_secret) {


			res.redirect('https://accounts.google.com/o/oauth2/v4/token?code='+req.query.code+'&client_id='+ req.query.client_id + '&client_secret=' + req.query.client_secret +'&redirect_uri=https://alexa-login-wrapper.herokuapp.com'+'grant_type=authorization_code' );

	}

	if(req.query.access_token) {


		res.redirect('https://layla.amazon.com/api/skill/link/M28YSGJKH151MO');


	}

});

app.post('/', function(req, res) {
	console.log(req.query)
	res.redirect('https://macdealexa.co.in');
		//res.redirect('https://accounts.google.com/o/oauth2/v4/token?code='+req.query.code+'&client_id='+ req.query.client_id + '&client_secret=' + req.query.client_secret +'&redirect_uri=https://alexa-login-wrapper.herokuapp.com'+'grant_type=authorization_code' );

});



app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
})








// app.get('/app', function(req, res) {

// 	if(req.query.code) {

// 		res.redirect('https://layla.amazon.com/api/skill/link/M28YSGJKH151MO?state='+req.query.state + '&code=' + req.query.code);
// 		//res.render('index');
// 		//res.send('index');
// 	}


// });