const express = require("express")
const app = express();
const router = express.Router();
const HomeController = require("../controllers/Homecontroller");
const UserController = require("../controllers/Usercontroller");
const AdminAuth = require("../middleware/AdminAuth")

router.get("/", HomeController.index);
router.post("/user", UserController.create);
router.get("/user",AdminAuth, UserController.index);
router.get("/user/:id",AdminAuth, UserController.findUser);
router.put("/user",AdminAuth, UserController.edit);
router.delete("/user/:id", AdminAuth,UserController.delete);
router.post("/recoverpassword", UserController.recoverPassword);
router.post("/changepassword", UserController.changePassword);
router.post("/login", UserController.login);

module.exports = router;