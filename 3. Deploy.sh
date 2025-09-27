#!/bin/bash

if [[ "$(id -u)" != "0"  ]]; then
    echo -n -e "[!] Run script as root\n"
    exit 1
fi

cd ./backend/
npm install
npm audit fix 2>/dev/null

cd ../frontend/
npm install
npm audit fix 2>/dev/null



echo -n -e "VITE_API_TEAM_SERVER=http://localhost:4000\n" >> ./.env
echo -n -e "VITE_API_WS_URL=ws://localhost:4000\n" >> ./.env

echo -n -e "\n[+] Please insert your c2c public URL http:// or https:// + (domain/ip): "
read url
echo -n -e "VITE_API_TEAM_SERVER_BUCKETS=${url}:80\n" >> ./.env

/usr/bin/npm run build

cp -r ./dist  ../backend/client/dist
