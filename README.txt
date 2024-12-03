* How to install
  $ sudo apt-get install -y nodejs npm
  $ sudo npm install -g forever
  $ sudo npm install -g express
  $ sudo npm install -g ejs
  $ sudo npm install -g express-generator
  $ sudo npm install -d
  $ sudo npm install 

* How to start the express server using forever
  $ sudo -u pi /usr/bin/node /usr/bin/forever start -a -d /home/pi/express/myapp/index.js
  You can write the command in /etc/rc.local to automatically start at the boot

* How to stop the express server
  $ forever list
  $ forever stop <uid>

* How to start the express server using systemd

  $ sudo vim /etc/systemd/system/mydaemon.service
  ```
  [Unit]
  Description=My Node.js Daemon
  
  [Service]
  User=pi
  Group=pi
  Environment="NODE_PATH=/usr/local/lib/node_modules"
  WorkingDirectory=/home/pi/work/SmartHome
  ExecStart=/usr/bin/node /home/pi/work/SmartHome/index.js
  Restart=always
  
  [Install]
  WantedBy=multi-user.target
  ```

  $ sudo systemctl enable mydaemon.service
  $ sudo systemctl start mydaemon.service
