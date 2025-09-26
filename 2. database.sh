#!/bin/bash

if [[ "$(id -u)" != "0"  ]]; then
    echo -n -e "\n[!] Run script as root\n"
    exit 1
fi

is_admin_mongo_pass=1

while [ $is_admin_mongo_pass -eq 1 ]; do
    echo -n -e "\n[+] Create password for mongodb administrator: "
    read -s db_admin_pwd
    echo -n -e "\n[+] Please repeat password: "
    read -s db_admin_pwd_rep

    if [[ "${db_admin_pwd}" != "${db_admin_pwd_rep}" ]]; then
        echo -n -e "\n[!] Database admin password, doesn't match, try again"
    else
        is_admin_mongo_pass=0
    fi
done

mongosh --eval "db.createUser({ user: \"admin\", pwd: \"${db_admin_pwd}\", roles: [ { role: \"root\", db: \"admin\" } ] })" admin
echo -n -e "\n[+] Mongodb admin password stablished..\n"


mongosh --eval 'db = db.getSiblingDB("c2c"); db.users.insertOne({user_name:"admin", password:"$2b$10$X30UFl02YAh8kDnQ0XrSqO5Ktl7hwqnj2C83cVsTaItN9Fg/0CN96", role:"admin", })'
echo -n -e "\n[!] Password for team server admin user created, Login in team server with: "
echo -n -e "\n\t User: admin \n\tPassword: Dvcf9xFDbo8yyY04iB6k\n"
echo -n -e "[!] Remember modify password in team server admin panel"

is_c2c_mongo_pass=1

while [ $is_c2c_mongo_pass -eq 1 ]; do

    echo -n -e "\n[+] Create password for c2c database connection in nodejs server: "
    read -s db_c2c_pwd
    echo -n -e "\n[+] Please repeat password: "
    read -s db_c2c_pwd_rep


    if [[ "${db_c2c_pwd}" != "${db_c2c_pwd_rep}" ]]; then
        echo -n -e "\n[!] Database c2c password, doesn't match"
    else
        is_c2c_mongo_pass=0
    fi

done

mongosh --eval "db = db.getSiblingDB(\"c2c\"); db.createUser({user:\"c2_admin\", pwd:\"${db_c2c_pwd}\", roles:[{role:\"dbOwner\", db:\"c2c\"}]})"
sudo sed -i 's/^#security:/security:\n  authorization: enabled/' /etc/mongod.conf

echo -n -e "\n[+] Please insert a secure long string as JWT seed, you can modify it in ./backend/.env:"
read jwt_seed

touch ./backend/.env

echo -n -e "DB_PORT=mongodb://c2_admin:${db_c2c_pwd}@localhost:27017/c2c\n" >> ./backend/.env
echo -n -e "SEED=${jwt_seed}\n" >> ./backend/.env
echo -n -e "BUCKETS_PORT=80\n" >> ./backend/.env
echo -n -e "PORT=4000\n" >> ./backend/.env

sudo sed -i 's/^#security:/security:\n  authorization: enabled/' /etc/mongod.conf
