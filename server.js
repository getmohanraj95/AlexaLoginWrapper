var express = require('express');
var app = express();
const fs = require('fs');
const jsonfile = require('jsonfile')
var path = require('path');
var url = require('url');



var port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {
	const urlObj = url.parse(req.url)
	if(req.query.client_id ==='828225850885-kaka1030svjtfjtjfndpmm13mjkpb2d0.apps.googleusercontent.com' ) {

		res.redirect('https://accounts.google.com/o/oauth2/v2/auth?scope=' + req.query.scope+' &include_granted_scopes=true&access_type=offline&state='+ req.query.state+'&redirect_uri=https://alexa.amazon.co.jp/api/skill/link/M28YSGJKH151MO&response_type=token&client_id='+ req.query.client_id);
	}
	// if(req.query.client_id  && req.query.code) {

	// 	res.redirect('https://accounts.google.com/o/oauth2/revoke?token='+ req.query.code);
	// }
	else {

		res.render('index');
		//res.redirect('https://layla.amazon.com/api/skill/link/M28YSGJKH151MO#state='+urlObj.hash.state+'&access_token= '+ urlObj.hash.access_token +'&token_type=Bearer');
	}
});

app.post('/', function(req, res) {

		// let fileName = './data.json';

		// let file = jsonfile.readFileSync(fileName);

		// file.data = req.query.code;

	    // jsonfile.writeFileSync(fileName,file);

		res.render('index');
		//res.redirect('https://layla.amazon.com/api/skill/link/M28YSGJKH151MO#state='+urlObj.hash.state+'&access_token= '+ urlObj.hash.access_token +'&token_type=Bearer');

});

app.get('/app', function(req, res) {


	res.json({state : req.query.state, code : req.query.code});

});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
})


