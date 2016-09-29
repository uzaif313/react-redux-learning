var stock_api = require("google-finance");
var express = require("express");

var app = express();
var SYMBOLS = [
  'NSE:BHARTIARTL',
  'NASDAQ:AMZN',
  'NASDAQ:GOOGL',
  'NASDAQ:YHOO'
];

app.get("/historical",function(req,res){
		stock_api.historical({
			symbols:SYMBOLS,
			from:'2016-09-01',
			to:'2016-09-25'

		},function(err,data){
			if(err){
				console.log(err);
			}else{
				res.send(data);
				res.end();
			}
		})
})

app.listen(3000);