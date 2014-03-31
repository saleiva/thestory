/* GET home page. */
exports.index = function(req, res){
	/*fs.readdir(path, [callback])*/
  res.render('index', { title: 'Express' });
};
