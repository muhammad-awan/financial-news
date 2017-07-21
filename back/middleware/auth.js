require('dotenv').config()
const passport = require('passport')
const passportJWT = require('passport-jwt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

function signTokenHandler( req, res) {
  const user = req.user
  const token = jwt.sign (
    { 
      email: user.email
    },
    process.env.JWT_SECRET,
    { algorithm: process.env.JWT_ALGO, 
      subject: user._id.toString(),
      expiresIn: process.env.JWT_EXPIRY
    }
  )
  res.json({ token })
}

passport.use(
  User.createStrategy() 
)

passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeader(),
      algorithms: [process.env.JWT_ALGO]
    },
    (jwtPayload, done) => {
      const UserID = jwtPayload.sub
      User.findById(userID)
        .then(user => {
          if (user) {
            done(null, user)
          }
          else {
            done(null, false)
          }
        })
        .catch(error => {
          done(new Error(`Issue fetching user with ID: ${userID}`, false))
        })
    }
  )
) 

function registerMiddleware( req, res, next){
  const user = new User({ email: req.body.email })
  User.register(user, req.body.password, (error, user) => {
    if (error) {
      next(error)
      return
    }

    req.user = user
    next()
  })
}

module.exports = {
  initialize: passport.initialize(),
  authenticateSignIn: passport.authenticate('local', { session: false }),
  authenticateJWT: passport.authenticate('jwt', {session: false}),
  register: registerMiddleware,
  signTokenHandler
}