const {redisClient }= require('../redisConnection');

const requireAuth = (req, res, next) => {
    const {authorization} = req.headers;
    console.log('middleware headers', authorization)
    
    if(!authorization){
        return res.status(401).json('unauthorized')
    }

    if(authorization){
        redisClient.get(authorization, (err, replay) =>{
            if(err || !replay){
                return res.status(401).json('unauthorized')           
            }
            console.log('you shall pass');
        })
    }
    next();

}

module.exports = {
  requireAuth,
}
