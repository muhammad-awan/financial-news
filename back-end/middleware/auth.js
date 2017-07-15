const passport = require('passport')
const passportJWT = require('passport-jwt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

//config
const jwtSecret = 'unsafeSecret'
const jwtAlgorithm = 'HS256'
const jwtExpiry = '10h'

function signTokenHandler( req, res) {
  const user = req.user
  const token = jwt.sign (
    { // this is the payload, may use profiles or whatever you need for app
      email: user.email
    },
    jwtSecret,
    { algorithm: jwtAlgorithm, 
      subject: user._id.toString(),
      expiresIn: jwtExpiry
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
      secretOrkey: jwtSecret,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeader(),
      algorithms: [jwtAlgorithm]
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
          done(new Error(`Issue fetching user with ID: ${userID}`))
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