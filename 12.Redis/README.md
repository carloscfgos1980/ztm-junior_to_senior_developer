## Chapter 12. Redis

# Lesson 1. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12680968

# Lesson 2. Section Overview

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12680967

# Lesson 3. Introduction To Databases

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12680973

# Lesson 4. Installing Redis

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/56125990

- download Redis
  https://redis.io/docs/latest/operate/oss_and_stack/install/install-stack/mac-os/

- There are three brew casks available.

redis-stack contains both redis-stack-server and redis-stack-redisinsight casks.
redis-stack-server provides Redis Stack server only.
redis-stack-redisinsight contains Redis Insight.

- Install using Homebrew

1.  tap the Redis Stack Homebrew tap:
    brew tap redis-stack/redis-stack

2.  Install Redis
    brew install redis-stack

- First-time Redis installation. If this is the first time you've installed Redis on your system, you need to be sure that your PATH variable includes the Redis Stack installation location.
  This location is either /opt/homebrew/bin for Apple silicon Macs or /usr/local/bin for Intel-based Macs:

- Start Redis Stack Server:
  redis-stack-server

- Uninstall Redis Stack:
  brew uninstall redis-stack-redisinsight redis-stack-server redis-stack
  brew untap redis-stack/redis-stack

- Connect to Redis
  redis-cli

- Test the connection with the ping command:
  127.0.0.1:6379> ping PONG

# Lesson 5. Redis Commands

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12680970

- Create a "key value"
  SET name "Godzilla"

- Get a "key"
  GET name "Godzilla"

- Check if there is any "key"
  EXIST name

- Delete "key":
  DEL name "Godzilla"

- Create a session:
  SET session "Jenny"

- Expire "Jenny" session in 10 seconds:
  EXPIRE session 10

# Lesson 6. Redis Data Types

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12680969

- Add multiple set:
  MSET a 2 b 5

- Get the data
  GET a
  Get b

- Get multiple data
  MGET a b

  **Redis Data Types**

1. String
2. Hashes
3. List
4. Sets
5. Sorteed sets

# Lesson 7. Redis Hashes

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12680972

- Hashes are just like objects in Javascript

CMD:
HMSET user id 45 name "Johnny"

- Get user id:
  HGET user id

- Get user name:
  HGET user id

- Get all the data from "user"
  HGETALL user

# Lesson 8. Redis Lists

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12680975

- Create a list pushing data from the left(head):
  LPUSH ourlist 10

- Create a list pushing data from the right:
  RPUSH ourlist "Hello"

- Get data (2 values)
  LRANGE ourlist 0 1

- Add data to "ourlist"
  LPUSH ourlist 55

- Get data (2 values)
  LRANGE ourlist 0 1

* It will return: 10, 55

- Get data (3 values)
  LRANGE ourlist 0 2

* It will return: 10, 55, "hello"

- Delete the values from the right:
  RPOP ourlist

# Lesson 9. Redis Sets + Sorted Sets

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12680971

<Sets> are an unorder collection of strings. It is like list, the different is that it does not allow to have duplicates elements

- Create a set
  SADD ourset 1 2 3 4 5

- Check set members:
  SMEMBERS ourset

- Try to add the same data. It won't work
  SADD ourset 1 2 3

- Check if a value exist in the set:
  SISMEMEBER ourset 5

- Create sorted set:
  ZADD team 50 "Wizzard"
  ZADD team 40 "Cavaliers"

- Cheack the order set
  ZRANge team 0 1

# Lesson 10. Section Summary

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12680974

- We are going to add redis to "brain-smart-app" to manage "sessions"
- Redis is very uselful for collect data that is not large like sessions
