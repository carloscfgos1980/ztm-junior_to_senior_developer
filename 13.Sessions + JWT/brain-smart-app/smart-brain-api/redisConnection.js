const redis = require("redis");

const redisClient = redis.createClient({
    url: process.env.REDIS_URI,
});

redisClient.on('error', err => console.log('Redis Client Error', err));

const redisConnect = async() => {
    await redisClient.connect();
}

const redisDisconnect = async () => {
    await redisClient.disconnect();
}


module.exports = {
  redisClient,
  redisConnect,
  redisDisconnect
}
