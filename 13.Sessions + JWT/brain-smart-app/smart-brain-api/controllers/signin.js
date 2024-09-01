const jwt = require('jsonwebtoken');

const handleSignin = (db, bcrypt, req, res) => {
 return new Promise((resolve, reject) =>{
    const { email, password } = req.body;
  if (!email || !password) {
    return reject('incorrect form submission');
  }
  return db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => resolve(user[0]))
          .catch(err => reject('unable to get user'))
      } else {
        reject('wrong credentials')
      }
    })
    .catch(err => reject('wrong credentials'))
 })
}

const singToken = (email) => {
  const jwtPayload = {email};
  const token = jwt.sign(jwtPayload, process.env.SECRET, {expiresIn: '2 days'});
}

const createSessions = (user) => {
  const {email, id} = user;
  const token = singToken(email)
  return {succes:'true', userid:id, token}
}

const signinAuthentication = (db, bcrypt) => (req, res) => {
  // const {authorization} = req.headers;
  const authorization = false;
  return authorization ? getAuthorizationToken() :
    handleSignin(db, bcrypt, req, res)
      .then(data => {
        return data.id && data.email ? createSessions(data) : Promise.reject(data)
      })
      .then(session => res.json(session))
      .catch(err => res.status(400).json(err))
}

module.exports = {
  signinAuthentication,
}
