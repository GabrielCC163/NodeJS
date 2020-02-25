npm i

run npm run dev

open localhost:3001/api

install docker

run docker pull mongo

run docker run --name mongodb -p 27017:27017 -d mongo

run docker ps

open localhost:27017

install robo 3T to see schemas and whichever
-- see https://askubuntu.com/questions/739297/how-to-install-robomongo-on-ubuntu

run /usr/local/bin/robomongo/bin/robo3t

to start mongodb docker container, run docker start mongodb

install insomnia for routing test, by running:
sudo snap install insomnia
and run: insomnia
configure "base_url" in environment for "http://localhost:3001/api"
run a get request for base_url/products