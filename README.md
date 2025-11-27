
# Grimoire C2

<img width="1512" height="1000" alt="logo" src="https://github.com/user-attachments/assets/fb7a3d3b-0513-4764-807a-647338a15c12" />

> Grimoire is a Command and Control (C2) management platform with a React frontend and a Node.js backend. The frontend provides a dashboard for monitoring and managing "implants", including real-time updates via WebSockets, filtering, and event logs. The backend handles authentication, implant communication, and data storage using MongoDB as the database engine.


-----
  
## Operating System
> For now, Grimoire C2 is only available for Linux systems. It has been tested on Debian 12 and Debian 13.
  
----

  
## Features

- Websockets communication.
- SSL communication.
- Botnet.
- Multiple listeners.
- Agent session authorized by session keys.
- Users and roles.
- Public buckets to upload and deliver content.
- Staged implants (Only for Windows and need manually compiled).
- Custom commands and operations.
- Only x64 implants available for now

  

## Installation

> It is highly recommended to use a Debian 13 virtual machine to deploy Grimoire C2.


----


```bash
git clone https://github.com/SebSecRepos/Grimoire-C2.git
```

```bash
unzip Grimoire-C2.zip
cd Grimoire-C2
chmod +x *.sh
```


----

  
### Installing requirements
```bash
sudo ./1. install_requeriments.sh
```


----


### Installing and configuring the database

> In this step you'll be asked to generate the following passwords:

```bash
sudo ./2. database.sh
```

- Mongo *database administrator password* (This is the root user for MongoDB).
- The script will generate *"Dvcf9xFDbo8yyY04iB6k"* as the default password for the admin user in the Team server (This password should be changed after the first login).
- *c2_admin* database password, (Is the password for c2c database user).

> *c2_admin* credentials given will be configured in *./backend/.env* file and Mongo database will be configured tu run in localhost requiring authorization.


----

### Deploying

> In this step you'll be asked for your c2c public url in order to complete *./frontend/.env* file, the url given must be the public access c2c domain or ip.
> The following script will install all node modules, compile the React proyect and copy *./frontend/dist* (Static files) in *./backend/client/dist* in order to serve all static files on Team server.

```bash
sudo ./3. Deploy.sh
```

> If you want to bind *Team server* using a non privileged user you must enable the following capability

```bash
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/node
```

----


### Team server
```bash
cd ./backend
node ./index.mjs
```

------

## Web panel access (Team server)

> Team server running on port *4000* is configured to run in localhost, it shouldn't be publicly accessed. In order to perform this configuration is required a local portforwarding using *ssh*.


```powershell
ssh -L 4000:localhost:4000 <vm_user>@<c2_server> -p 22
```


-----

## Database user interface access (MongoDB Compass)

> Before connecting, you must port forward the MongoDB service running on port 27017:

```powershell
ssh -L 27017:localhost:27017 <vm_user>@<c2_server> -p 22
```

> To access the database using a graphical interface, download and install *MongoDB Compass*. Log in using the password you generated for the *admin* user.

[MongoDB Compass Download](https://www.mongodb.com/try/download/compass)
