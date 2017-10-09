const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPoliy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPoliy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)
}
