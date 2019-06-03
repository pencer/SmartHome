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
app.get('/viera/on', function (req, res) {
  exec('/home/pi/bin/wol_viera.sh');
  res.render("index", {});
});
app.get('/viera/off', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php POWER');
  res.render("index", {});
});
app.get('/viera/volup', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php VOLUP');
  res.render("index", {});
});
app.get('/viera/voldown', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php VOLDOWN');
  res.render("index", {});
});
app.get('/viera/ch_up', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php CH_UP');
  res.render("index", {});
});
app.get('/viera/ch_down', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php CH_DOWN');
  res.render("index", {});
});
app.get('/viera/d0', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D0');
  res.render("index", {});
});
app.get('/viera/d1', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D1');
  res.render("index", {});
});
app.get('/viera/d2', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D2');
  res.render("index", {});
});
app.get('/viera/d3', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D3');
  res.render("index", {});
});
app.get('/viera/d4', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D4');
  res.render("index", {});
});
app.get('/viera/d5', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D5');
  res.render("index", {});
});
app.get('/viera/d6', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D6');
  res.render("index", {});
});
app.get('/viera/d7', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D7');
  res.render("index", {});
});
app.get('/viera/d8', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D8');
  res.render("index", {});
});
app.get('/viera/d9', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D9');
  res.render("index", {});
});
// Light
app.get('/light/2fmain/lampcolor', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_2fmain_lampcolor');
  res.render("index", {});
});
app.get('/light/2fmain/next', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_2fmain_next');
  res.render("index", {});
});
app.get('/light/2fmain/off', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_2fmain_off');
  res.render("index", {});
});
app.get('/light/1fliving/0', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_living_0');
  res.render("index", {});
});
app.get('/light/1fliving/1', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_living_1');
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

