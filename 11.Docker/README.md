## 11.Docker

# Lesson 1. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671370

# Lesson 2. Section Overview

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671366

# Lesson 3. Docker Containers

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671358

- Check <Development> diagram

# Lesson 4. Installing Docker

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671364

# Lesson 5. Dockerfile

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671371

create a Dockerfile
terminal at the roor od smart-brain-api
touch Dockerfile

Docker hub. I am using node v
v20.8.0

so alpine3.19 is the right version to me to choose, it depends of node version

CMD
docker built -t supercontainer .
docker run -it supercontainer

- This bring us inside the container

- Inside the container, verify node version:
  node -v

# Lesson 6. Docker Commands

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671359

- Run docker in the background:
  docker run -it -d supercontainer

- check all the containers that are currently running:
  docker ps

- Access a container:
  docker exec -it [contaier hash id] bash

- Stop the container:
  docker stop

- Exit container:
  exit

https://docs.docker.com/reference/cli/docker/

# Lesson 7. Dockerfile 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671360

- Give a port to the container to run:
  docker run -it -p 3000:3000 supercontainer
  npm start

# Lesson 8. Docker Compose. Introduction to docker-composer

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671362

- We use docker compose when we have more than one service, in this case the backedn and the database.... later redis

https://docs.docker.com/compose/

docker-compose build
docker-compose run. Example:
docker-compose run smart-brain-api

docker-compose.yml => working_dir has to match the one at Dockerfile
working_dir: /usr/src/smart-brain-api

Dockerfile:
WORKDIR /usr/src/smart-brain-api

docker-compose up. Example

docker-compose up --build
// This is for the first time, then just
docker-compose up

# Lesson 9. Docker Compose 2. Setting to automatically update the image in docker

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671372

docker-compose.yml => So the docker image update automatically
volumes: - ./:/usr/src/smart-brain-api

# Lesson 10. Docker Compose 3. CMD for docker composer

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671361

- Bring down the container
  docker-compose down

- Run the container:
  docker-compose run smart-brain-api

- Access to the container bash (CLI):
  // run the component in the background
  docker-compose up -d

  docker-compose exec smart-brain-api bash

# Lesson 11. Docker Compose 4. Setting for postgres database in container

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671363

1. brain-smart-api/docker-compose.yml => Setting for postgres service in the container:

postgres:
container_name: postgres
build: ./postgres
environment:
POSTGRES_USER: admin
POSTGRES_PASSWORD: password
POSTGRES_URL: postgres://admin:password@localhost:5432/smart-brain
POSTGRES_DB: smart-brain
POSTGRES_HOST: postgres
ports: - "5432:5432"

2. server.js => Knex package to connect postgres database in the container
   const db = knex({
   client: 'pg',
   connection: process.env.POSTGRES_URI
   });

URI => unique resource identifier

# Lesson 12. Docker Compose 5

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671365

# Lesson 13. Docker Compose 6. Add tables to postgres database

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671367

- Explanation how to implement the commands for creating tables and fill the data to the tables

1. Create "postgres" folder at root directory
2. postgres/ => Create "table" folder

//create tables

3. postgres/tables/ => create loging.sql:
   BEGIN TRANSACTION;

CREATE TABLE login (
id serial PRIMARY KEY,
hash varchar(100) NOT NULL,
email text UNIQUE NOT NULL
);

COMMIT;

4. postgres/tables/ => create users.sql:
   BEGIN TRANSACTION;

CREATE TABLE users (
id serial PRIMARY KEY,
name VARCHAR(100),
email text UNIQUE NOT NULL,
entries BIGINT DEFAULT 0,
joined TIMESTAMP NOT NULL
);

COMMIT;

// run commands to execute the queries

5. postgres/ => Crate "deploy_schemas.sql" file
   -- Deploy fresh database tabels:
   \i '/docker-entrypoint-initdb.d/tables/users.sql'
   \i '/docker-entrypoint-initdb.d/tables/login.sql'

6. Dockerfile:
   ADD /tables/ /docker-entrypoint-initdb.d/tables/
   ADD deploy_schemas.sql /docker-entrypoint-initdb.d/

# Lesson 14. Docker Compose 7. Add data to the tables in postgres database

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12671369

1. postgres/ => Create "seed" folder and then seed.sql:
   insert into users (name, email, entries, joined) values ('a', 'a@a.com', 5, '2018-01-01');
   insert into login (hash, email) values ('$2a$10$WAK21U0LWl7C//jJ.DOB2uPP1DJQh7KUDgasdyQeGzkop2Pzl8W7u', 'a@a.com');

// run commands to execute the queries

2. postgres/deploy_schemas.sql => command to run the seed query that contains the data to input in the tables

-- For testing purposes only. This file will add dummy data
\i '/docker-entrypoint-initdb.d/seed/seed.sql'

3. Dockerfile:
   ADD /seed/ /docker-entrypoint-initdb.d/seed/

# Lesson 15. Section Summary

- Containers allow us to make sure we can run this piece of software anywhere
- We take the responsability to set the code to everybody who needs the code and as long we share it properly, any bosy shouyld be able to use it
