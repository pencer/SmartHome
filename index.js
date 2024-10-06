// How to run: node index.jp
var express = require('express');
const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.render("index", {});
});
app.get('/test', function (req, res) {
  res.send('Test World!!!');
});
app.get('/remotectrl', function (req, res) {
  res.render("index", {});
});
app.get('/childroom1/bell', function (req, res) {
  exec('/home/pi/work/speaker/bell.py');
  res.render("index", {});
});
app.get('/childroom1/bell1', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 1');
  res.render("index", {});
});
app.get('/childroom1/bell2', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 2');
  res.render("index", {});
});
app.get('/childroom1/bell3', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 3');
  res.render("index", {});
});
app.get('/childroom1/bell4', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 4');
  res.render("index", {});
});
app.get('/childroom1/bell5', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 5');
  res.render("index", {});
});
app.get('/childroom1/bell6', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 6');
  res.render("index", {});
});
app.get('/childroom1/bell7', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 7');
  res.render("index", {});
});
app.get('/childroom1/bell8', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 8');
  res.render("index", {});
});
app.get('/childroom1/bell9', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 9');
  res.render("index", {});
});
app.get('/childroom1/bell10', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 10');
  res.render("index", {});
});
app.get('/childroom1/bell11', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 11');
  res.render("index", {});
});
app.get('/childroom1/bell12', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 12');
  res.render("index", {});
});
app.get('/childroom1/bell13', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 13');
  res.render("index", {});
});
app.get('/childroom1/bell14', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 14');
  res.render("index", {});
});
app.get('/childroom1/bell15', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 15');
  res.render("index", {});
});
app.get('/childroom1/bell16', function (req, res) {
  exec('/home/pi/work/speaker/bell.py -m 16');
  res.render("index", {});
});
app.get('/light/next', function (req, res) {
  exec('python3 /home/pi/work/ir/irrp.py -p -g13 -f /home/pi/work/ir/childroom1 lampch1')
  res.render("index", {});
});
app.get('/ac/off', function (req, res) {
  exec('python3 /home/pi/work/ir/irrp.py -p -g13 -f /home/pi/work/ir/childroom1 acoff')
  res.render("index", {});
});
app.get('/pi/shutdown', function (req, res) {
  exec('sudo shutdown -h now');
  res.redirect('/');
});
var server = app.listen(3001, function() {
  console.log("Node.js is listening to Port " + server.address().port);
});
  
// 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

