// How to run: node index.jp
var express = require('express');
const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.render("index", {stat_msg: ""});
});
app.get('/radio/status', function (req, res) {
  var data = {
    stat_msg: "OOOKKK",
  };
  //const result = execSync("/home/pi/work/radio/conn_btspeaker.sh 6C:5A:B5:70:F8:2A info | tr -d '\\000-\\010\\013-\\037'").toString();
  const result = execSync('/home/pi/work/radio/conn_btspeaker.sh 6C:5A:B5:70:F8:2A info');
  const result2 = execSync('systemctl status bluetooth.service').toString();
  const result3 = execSync('ps -ef | grep -e pulseaudio').toString();
  data["stat_msg"] = result + "!" + result2;
  res.render("index", data);
});
app.get('/bluetooth/restart', function (req, res) {
  const result = execSync('sudo systemctl restart bluetooth.service').toString();
  res.render("index", {stat_msg: result});
});
app.get('/pulseaudio/start', function (req, res) {
  const result = execSync('pulseaudio start').toString();
  res.render("index", {stat_msg: result});
});
app.get('/test', function (req, res) {
  res.send('Test World!!!');
});
app.get('/remotectrl', function (req, res) {
  res.render("index", {stat_msg: ""});
});
app.get('/viera/weather', function (req, res) {
  execSync('/home/pi/bin/vieracontrol.php D1 ; sleep 7 ; /home/pi/bin/vieracontrol.php DATA ; sleep 2 ; /home/pi/bin/vieracontrol.php RED ; sleep 3 ; /home/pi/bin/vieracontrol.php ENTER');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/on', function (req, res) {
  exec('/home/pi/bin/wol_viera.sh');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/off', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php POWER');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/volup', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php VOLUP');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/voldown', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php VOLDOWN');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/ch_up', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php CH_UP');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/ch_down', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php CH_DOWN');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/d0', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D0');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/d1', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D1');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/d2', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D2');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/d3', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D3');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/d4', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D4');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/d5', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D5');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/d6', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D6');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/d7', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D7');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/d8', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D8');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/d9', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php D9');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/blue', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php BLUE');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/red', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php RED');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/green', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php GREEN');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/yellow', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php YELLOW');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/enter', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php ENTER');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/return', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php RETURN');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/rec', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php REC');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/stop', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php STOP');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/pause', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php PAUSE');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/reclist', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php RECLIST');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/data', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php DATA');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/epg', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php EPG');
  res.render("index", {stat_msg: ""});
});
app.get('/viera/chg_input', function (req, res) {
  exec('/home/pi/bin/vieracontrol.php CHG_INPUT');
  res.render("index", {stat_msg: ""});
});
// Music
app.get('/music/radio/radio', function (req, res) {
  exec('USE_MPG123=1 BTDEVICE=" " /home/pi/work/radio/radio.sh');
  res.render("index", {stat_msg: ""});
});
app.get('/music/radio/radio0', function (req, res) {
  exec('USE_MPG123=1 BTDEVICE=" " /home/pi/work/radio/radio.sh 0');
  res.render("index", {stat_msg: ""});
});
app.get('/music/radio/radio1', function (req, res) {
  exec('USE_MPG123=1 BTDEVICE=" " /home/pi/work/radio/radio.sh 1');
  res.render("index", {stat_msg: ""});
});
app.get('/music/radio/radio2', function (req, res) {
  exec('USE_MPG123=1 BTDEVICE=" " /home/pi/work/radio/radio.sh 2');
  res.render("index", {stat_msg: ""});
});
app.get('/music/radio/radio3', function (req, res) {
  exec('USE_MPG123=1 BTDEVICE=" " /home/pi/work/radio/radio.sh 3');
  res.render("index", {stat_msg: ""});
});
app.get('/music/radio/radio4', function (req, res) {
  exec('USE_MPG123=1 BTDEVICE=" " /home/pi/work/radio/radio.sh 4');
  res.render("index", {stat_msg: ""});
});
app.get('/music/radio/radio5', function (req, res) {
  exec('USE_MPG123=1 BTDEVICE=" " /home/pi/work/radio/radio.sh 5');
  res.render("index", {stat_msg: ""});
});
app.get('/music/radio/radio6', function (req, res) {
  exec('USE_MPG123=1 BTDEVICE=" " /home/pi/work/radio/radio.sh 6');
  res.render("index", {stat_msg: ""});
});
app.get('/music/bluetoothctl/conn', function (req, res) {
  const result = execSync('/home/pi/work/radio/conn_btspeaker.sh 6C:5A:B5:70:F8:2A conn').toString();
  res.render("index", {stat_msg: result});
});
app.get('/music/bluetoothctl/pair', function (req, res) {
  const result = execSync('/home/pi/work/radio/conn_btspeaker.sh 6C:5A:B5:70:F8:2A pair').toString();
  res.render("index", {stat_msg: result});
});
// Soundbar (remote)
app.get('/remote/raspberrypi/soundbar/power', function (req, res) {
  exec('wget http://192.168.1.23:3001/soundbar/power -O /dev/null -o /dev/null');
  res.render("index", {stat_msg: ""});
});
app.get('/remote/raspberrypi/soundbar/volup', function (req, res) {
  exec('wget http://192.168.1.23:3001/soundbar/volup -O /dev/null -o /dev/null');
  res.render("index", {stat_msg: ""});
});
app.get('/remote/raspberrypi/soundbar/voldown', function (req, res) {
  exec('wget http://192.168.1.23:3001/soundbar/voldown -O /dev/null -o /dev/null');
  res.render("index", {stat_msg: ""});
});
app.get('/remote/raspberrypi/soundbar/bluetooth', function (req, res) {
  exec('wget http://192.168.1.23:3001/soundbar/bluetooth -O /dev/null -o /dev/null');
  res.render("index", {stat_msg: ""});
});
app.get('/remote/raspberrypi/soundbar/pairing', function (req, res) {
  exec('wget http://192.168.1.23:3001/soundbar/pairing -O /dev/null -o /dev/null');
  res.render("index", {stat_msg: ""});
});
app.get('/remote/raspberrypi/soundbar/sound', function (req, res) {
  exec('wget http://192.168.1.23:3001/soundbar/sound -O /dev/null -o /dev/null');
  res.render("index", {stat_msg: ""});
});
// Light
app.get('/light/2fmain/lampcolor', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_2fmain_lampcolor');
  res.render("index", {stat_msg: ""});
});
app.get('/light/2fmain/neutralwhite', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_2fmain_neutralwhite');
  res.render("index", {stat_msg: ""});
});
app.get('/light/2fmain/next', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_2fmain_next');
  res.render("index", {stat_msg: ""});
});
app.get('/light/2fmain/small', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_2fmain_lampcolor && sleep 1 && /home/pi/bin/irc_send.sh light_2fmain_next');
  res.render("index", {stat_msg: ""});
});
app.get('/light/2fmain/off', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_2fmain_off');
  res.render("index", {stat_msg: ""});
});
app.get('/light/1fliving/0', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_living_0');
  res.render("index", {stat_msg: ""});
});
app.get('/light/1fliving/1', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_living_1');
  res.render("index", {stat_msg: ""});
});
app.get('/light/1fdining/all', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_dining_all');
  res.render("index", {stat_msg: ""});
});
app.get('/light/1fdining/dimmer', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_dining_dimmer');
  res.render("index", {stat_msg: ""});
});
app.get('/light/1fdining/small', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_dining_small');
  res.render("index", {stat_msg: ""});
});
app.get('/light/1fdining/off', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_dining_off');
  res.render("index", {stat_msg: ""});
});
app.get('/light/1fdining/next', function (req, res) {
  exec('/home/pi/bin/irc_send.sh light_dining_next');
  res.render("index", {stat_msg: ""});
});
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

