const User = require('../../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
  create,
  checkToken,
  login
}

async function create(req, res){
  try {
    const user = await User.create(req.body)
    const token = createJWT(user)
    res.json(token)
  } catch (error) {
    res.status(400).json(error)
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

function createJWT(user){
  return jwt.sign(
    {user},
    process.env.SECRET,
    { expiresIn: '24hr'}
  )
}

async function login(req, res) {
  try{
    console.log(req.body)
    const user = await User.findOne({email: req.body.email})
    const result = await bcrypt.compare(req.body.password, user.password)
    if (result){
      const token = createJWT(user)
      res.json(token)
    } else {
      res.status(400).json(error)
    }
  }catch(error){
    console.log('catch')
    res.status(400).json(error)
  }}