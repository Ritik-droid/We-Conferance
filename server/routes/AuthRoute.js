const { Signup } = require("../controller/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);

module.exports = router;
