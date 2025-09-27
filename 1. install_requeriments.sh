#!/bin/bash


if [[ "$(id -u)" != "0"  ]]; then
    echo -n -e "[!] Run script as root\n"
    exit 1
fi

sudo apt update -y && sudo apt upgrade -y

sudo apt install python3 python3-pip git net-tools moreutils zip git -y

sudo apt-get install nodejs npm -y 

sudo apt-get install build-essential libjpeg-dev libpng-dev libtiff-dev -y  

sudo apt-get install gnupg curl wget -y

curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb-server-8.0.gpg
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | sudo gpg --dearmor -o  /etc/apt/trusted.gpg.d/mongodb-server-8.0.gpg
   

echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
sudo apt update -y
sudo apt install mongodb-org -y

npm install bcryptjs -g


sudo chown -R mongodb:mongodb /var/lib/mongodb

sudo systemctl start mongod
sudo systemctl enable mongod

cat /usr/lib/systemd/system/mongod.service | grep 'MONGODB_CONFIG_OVERRIDE_NOFORK=1' && cat /usr/lib/systemd/system/mongod.service | grep -v 'MONGODB_CONFIG_OVERRIDE_NOFORK=1' | sponge /usr/lib/systemd/system/mongod.service

sudo systemctl daemon-reload
sudo systemctl restart mongod

sudo apt-get update && sudo apt-get install openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh
