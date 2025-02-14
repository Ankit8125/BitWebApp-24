import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  verifyJWT,
  verifyAdmin,
  verifyProfessor,
} from "../middlewares/auth.middleware.js";
import {
  addProf,
  getProf,
  loginProf,
  logoutProf,
  getAppliedStudents,
  selectSummerStudents,
  getcurrentProf,
  incrementLimit,
  getAcceptedStudents,
} from "../controllers/professor.controller.js";
// import { verify } from "jsonwebtoken";
const router = Router();
router.route("/addprof").post(verifyAdmin, addProf);
router.route("/getProf").get(getProf);

router.route("/login").post(loginProf);
router.route("/logout").post(verifyProfessor, logoutProf);

router.route("/getAppliedStudents").get(verifyProfessor, getAppliedStudents);
router
  .route("/selectSummerStudents")
  .post(verifyProfessor, selectSummerStudents);

router.route("/getcurrentProf").get(verifyProfessor, getcurrentProf);

router.route("/incrementLimit").post(verifyAdmin, incrementLimit);

router.route("/getAcceptedStudents").get(verifyProfessor, getAcceptedStudents);

export default router;
