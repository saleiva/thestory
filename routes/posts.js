var fs = require("fs");
var markdown = require( "markdown" ).markdown;
var cheerio = require('cheerio');

exports.post = function(req, res){

	var _filename = req.params.post_slug;

  // Read the specified blogpost content from the .md
  fs.readFile('./posts/'+_filename+'.md', "utf-8", function (err, data) {
	  if (err){
	  	//TODO: Correct way to handle exceptions 
	  	//throw err;
	  	res.send('Error 400');	
	  }else{
	  	var _c = markdown.toHTML(data);
	  	
	  	var $ = cheerio.load(_c);
	  	var _title = $('h1').text();

	  	res.render('post', {title: _title, post_content: _c});
	  }
	});
};
