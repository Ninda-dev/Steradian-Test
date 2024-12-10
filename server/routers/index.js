const express = require('express')
const errorHandler = require('../middleware/error')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
const UserController = require('../controllers/userController')
const ProductController = require('../controllers/productController')
const ClaimController = require('../controllers/claimController')
const router = express.Router()


//Register Login
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/auth/google', UserController.googleLogin)

// router.use(authentication)

// router.use(authorization)

//

router.use(errorHandler);

module.exports = router