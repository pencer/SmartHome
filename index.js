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
app.get('/viera/weather', function (req, res) {
  execSync('/home/pi/bin/vieracontrol.php D1 ; sleep 7 ; /home/pi/bin/vieracontrol.php DATA ; sleep 2 ; /home/pi/bin/vieracontrol.php RED ; sleep 3 ; /home/pi/bin/vieracontrol.php ENTER');
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
app.get('/viera/blue', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php BLUE');
  res.render("index", {});
});
app.get('/viera/red', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php RED');
  res.render("index", {});
});
app.get('/viera/green', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php GREEN');
  res.render("index", {});
});
app.get('/viera/yellow', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php YELLOW');
  res.render("index", {});
});
app.get('/viera/enter', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php ENTER');
  res.render("index", {});
});
app.get('/viera/return', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php RETURN');
  res.render("index", {});
});
app.get('/viera/rec', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php REC');
  res.render("index", {});
});
app.get('/viera/stop', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php STOP');
  res.render("index", {});
});
app.get('/viera/pause', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php PAUSE');
  res.render("index", {});
});
app.get('/viera/reclist', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php RECLIST');
  res.render("index", {});
});
app.get('/viera/data', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php DATA');
  res.render("index", {});
});
app.get('/viera/epg', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php EPG');
  res.render("index", {});
});
app.get('/viera/chg_input', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php CHG_INPUT');
  res.render("index", {});
});
// Light
app.get('/light/2fmain/lampcolor', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_2fmain_lampcolor');
  res.render("index", {});
});
app.get('/light/2fmain/neutralwhite', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_2fmain_neutralwhite');
  res.render("index", {});
});
app.get('/light/2fmain/next', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_2fmain_next');
  res.render("index", {});
});
app.get('/light/2fmain/small', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_2fmain_lampcolor && sleep 1 && /home/pi/bin/irc_send.sh light_2fmain_next');
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
app.get('/light/1fdining/all', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_dining_all');
  res.render("index", {});
});
app.get('/light/1fdining/dimmer', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_dining_dimmer');
  res.render("index", {});
});
app.get('/light/1fdining/small', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_dining_small');
  res.render("index", {});
});
app.get('/light/1fdining/off', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_dining_off');
  res.render("index", {});
});
app.get('/light/1fdining/next', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_dining_next');
  res.render("index", {});
});
// Fan/Iris
app.get('/fan/iris/power', function (req, res) {
  exec('/home/pi/work/rpz-ir-sensor/cgir-master/cgirtool.py send -c /home/pi/work/rpz-ir-sensor/cgir-master/codes.json ir_fan_iris_power')
  res.render("index", {});
});
app.get('/fan/iris/up', function (req, res) {
  exec('/home/pi/work/rpz-ir-sensor/cgir-master/cgirtool.py send -c /home/pi/work/rpz-ir-sensor/cgir-master/codes.json ir_fan_iris_up')
  res.render("index", {});
});
app.get('/fan/iris/down', function (req, res) {
  exec('/home/pi/work/rpz-ir-sensor/cgir-master/cgirtool.py send -c /home/pi/work/rpz-ir-sensor/cgir-master/codes.json ir_fan_iris_down')
  res.render("index", {});
});
app.get('/fan/iris/swinglr', function (req, res) {
  exec('/home/pi/work/rpz-ir-sensor/cgir-master/cgirtool.py send -c /home/pi/work/rpz-ir-sensor/cgir-master/codes.json ir_fan_iris_swinglr')
  res.render("index", {});
});
app.get('/fan/iris/swingud', function (req, res) {
  exec('/home/pi/work/rpz-ir-sensor/cgir-master/cgirtool.py send -c /home/pi/work/rpz-ir-sensor/cgir-master/codes.json ir_fan_iris_swingud')
  res.render("index", {});
});
app.get('/fan/iris/mode_cont', function (req, res) {
  exec('/home/pi/work/rpz-ir-sensor/cgir-master/cgirtool.py send -c /home/pi/work/rpz-ir-sensor/cgir-master/codes.json ir_fan_iris_mode_cont')
  res.render("index", {});
});
app.get('/fan/iris/mode_rithm', function (req, res) {
  exec('/home/pi/work/rpz-ir-sensor/cgir-master/cgirtool.py send -c /home/pi/work/rpz-ir-sensor/cgir-master/codes.json ir_fan_iris_mode_rithm')
  res.render("index", {});
});
app.get('/fan/iris/mode_dry', function (req, res) {
  exec('/home/pi/work/rpz-ir-sensor/cgir-master/cgirtool.py send -c /home/pi/work/rpz-ir-sensor/cgir-master/codes.json ir_fan_iris_mode_dry')
  res.render("index", {});
});
// Light/Koizumi
app.get('/light/koizumi/full', function (req, res) {
  exec('/home/pi/work/rpz-ir-sensor/cgir-master/cgirtool.py send -c /home/pi/work/rpz-ir-sensor/cgir-master/codes.json ir_light_koizumi_full')
  res.render("index", {});
});
app.get('/light/koizumi/dimmer', function (req, res) {
  exec('/home/pi/work/rpz-ir-sensor/cgir-master/cgirtool.py send -c /home/pi/work/rpz-ir-sensor/cgir-master/codes.json ir_light_koizumi_dimmer')
  res.render("index", {});
});
app.get('/light/koizumi/small', function (req, res) {
  exec('/home/pi/work/rpz-ir-sensor/cgir-master/cgirtool.py send -c /home/pi/work/rpz-ir-sensor/cgir-master/codes.json ir_light_koizumi_small')
  res.render("index", {});
});
app.get('/light/koizumi/off', function (req, res) {
  exec('/home/pi/work/rpz-ir-sensor/cgir-master/cgirtool.py send -c /home/pi/work/rpz-ir-sensor/cgir-master/codes.json ir_light_koizumi_off')
  res.render("index", {});
});
//
app.get('/ac/1fac/stop', function (req, res) {
  exec('/home/pi/bin/ac1.sh stop');
  res.redirect('/');
});
app.get('/ac/1fac/c28_0', function (req, res) {
  exec('/home/pi/bin/ac1.sh c28 0');
  res.redirect('/');
});
app.get('/ac/1fac/c28_2', function (req, res) {
  exec('/home/pi/bin/ac1.sh c28 2');
  res.redirect('/');
});
app.get('/ac/1fac/c28_auto', function (req, res) {
  exec('/home/pi/bin/ac1.sh c28 auto');
  res.redirect('/');
});
app.get('/ac/1fac/c27_0', function (req, res) {
  exec('/home/pi/bin/ac1.sh c27 0');
  res.redirect('/');
});
app.get('/ac/1fac/c27_2', function (req, res) {
  exec('/home/pi/bin/ac1.sh c27 2');
  res.redirect('/');
});
app.get('/ac/1fac/c27_auto', function (req, res) {
  exec('/home/pi/bin/ac1.sh c27 auto');
  res.redirect('/');
});
app.get('/pi/aplay', function (req, res) {
  exec('aplay aplay -D plughw:1,0 /home/pi/sounds/shichijihanninarimasita.wav');
  res.redirect('/');
});
app.get('/viera/tv_autooff_enable', function (req, res) {
  exec('/home/pi/bin/set_cron.sh tv_autooff enable');
  res.redirect('/');
});
app.get('/viera/tv_autooff_disable', function (req, res) {
  exec('/home/pi/bin/set_cron.sh tv_autooff disable');
  res.redirect('/');
});
app.get('/businfo/check/fujiyamashita/higashitotsukaekihigashiguchi', function (req, res) {
  exec('/home/pi/kanachu/BusInfo/kanachu.py 12117 12101');
  res.redirect('/');
});
app.get('/businfo/check/kamiyabe/totsukaekihigashiguchi', function (req, res) {
  exec('/home/pi/kanachu/BusInfo/kanachu.py 12203 12001');
  res.redirect('/');
});
app.get('/businfo/check/fujiyamashita/akibasansaro', function (req, res) {
  exec('/home/pi/kanachu/BusInfo/kanachu.py 12117 12115');
  res.redirect('/');
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

