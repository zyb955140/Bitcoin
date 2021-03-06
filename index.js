var express = require('express');
var app = express();
let router = require("./router/router")
let path = require("path")
var XrpWallet = require("./controllers/XrpTransaction")
const srcAddres='rUg8zSZMqT7DCN7ff9Sjv3HA5Vm2c7jDDj'; //Edison钱包地址 也是被监听的账户
const secret = "snMJDHfumYZJiahem5T1n1r4w5RtC";  //Edison钱包密钥
//const srcAddres='rQhsWVT8ftfaizQThZqYpLNBwsyHEcv77v';
//const secret = 'snJnZXywpM8iDMi6YkAjReDmBkwx7';
const desAddres = 'rQhsWVT8ftfaizQThZqYpLNBwsyHEcv77v'; //即将转账的地址

var options={};
pXrp = new XrpWallet(srcAddres,secret,1,"rUg8zSZMqT7DCN7ff9Sjv3HA5Vm2c7jDDj");
pXrp.xrpInit(); //初始化，并开启监听
//pXrp.xrpGetTransactions(function(result){console.log(result)},function (err) {console.log(err)},options); //测试获取历史记录
pXrp.xrpGetBalances(function(result){console.log(result)},function (err) {console.log(err)}); //查询账户余额
pXrp.xrpPayment(desAddres,2,false,function(result){console.log(result)},function (err){console.log("call payment error: " + err)}) //测试转账


app.use(express.urlencoded({ extended: false }))
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "static")));

app.use('/', router);

console.log("正在监听3000端口")
app.listen(3000)