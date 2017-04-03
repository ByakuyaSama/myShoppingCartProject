var http = require('http');
var express = require('express');
var router = express.Router();
var path = require('path');
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});
 
 router.get('/data', function(req,res){
	res.json([{"id": 1, "name": "Mymm", "city": "Pantano do Sul"},
        {"id": 2, "name": "Skyble", "city": "Guilmaro"},
        {"id": 3, "name": "Tagfeed", "city": "Gnosjö"},
        {"id": 4, "name": "Realcube", "city": "Jrashen"},
        {"id": 5, "name": "Bluejam", "city": "Zhangjiawo"},
        {"id": 6, "name": "Jayo", "city": "Obonoma"},
        {"id": 7, "name": "Cogidoo", "city": "Sungsang"},
        {"id": 8, "name": "Avavee", "city": "Diawara"},
        {"id": 9, "name": "Tagtune", "city": "Monywa"},
        {"id": 10, "name": "Centimia", "city": "Retkovci"}]);
});

 router.get('/products/:usertype/:productid', function(req,res){

/*
 	var data = {
        "products": {
            "usertype": req.params.usertype,
            "productid": req.params.productid
        }
    }; 
 */
	var myProducts;
	var myJSON;

	myJSON = {
        "products": {
            "usertype": req.params.usertype,
            "productid": req.params.productid
        }
    }; 
       

	//var xmlhttp = new XMLHttpRequest();
	var url = "http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js";

	http.get(url, function(res){
	    var body = '';

	    res.on('data', function(chunk){
	        body += chunk;
	    });

	    res.on('end', function(){
	        myProducts = JSON.parse(body);
	        myJSON = body;
	        console.log("Got a response: ", myProducts.site);
	    });
	}).on('error', function(e){
	      console.log("Got an error: ", e);
	});

	//var myProducts = JSON.parse(data);


	res.status(200).json(myJSON);
 });

module.exports = router;