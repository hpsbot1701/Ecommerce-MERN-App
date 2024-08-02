import express from "express";
import {
  getUserProfileController,
  loginController,
  logoutController,
  registerController,
  updatePasswordController,
  updateProfieController,
  updateProfilePicController,
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";

//router object
const router = express.Router();

//routes
//register
router.post("/register", registerController);

//login
router.post("/login", loginController);

//profile
router.get("/profile", isAuth, getUserProfileController);

//logout
router.get("/logout", isAuth, logoutController);

//Update profile
router.put("/profile-update", isAuth, updateProfieController);

//Update password
router.put("/update-password", isAuth, updatePasswordController);

//Update profile pic
router.put("/update-picture", isAuth, singleUpload, updateProfilePicController);

//export
export default router;
