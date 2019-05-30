const router = require('express').Router()
const withAuth = require('../../middleware/authentication');

const { getUserProfile, register, login } = require("../../controllers/user-controller");

router
  .route('/')
  .get(withAuth, getUserProfile);

router
  .route("/login")
  .post(login);

router
  .route("/register")
  .post(register);

module.exports = router;
