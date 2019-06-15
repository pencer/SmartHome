* How to start the express server
  $ sudo -u pi /usr/bin/node /usr/bin/forever start -a -d /home/pi/express/myapp/index.js
  You can write the command in /etc/rc.local to automatically start at the boot

* How to stop the express server
  $ forever list
  $ forever stop <uid>
