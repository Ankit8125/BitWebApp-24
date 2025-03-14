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
  getAppliedGroups,
  selectSummerStudents,
  getcurrentProf,
  incrementLimit,
  getAcceptedStudents,
  denyGroup,
  acceptGroup,
  getLimits,
  addRemark,
  groupAttendance,
  acceptedGroups,
  mergeGroups,
  otpForgotPassword,
  changePassword
} from "../controllers/professor.controller.js";

const router = Router();
router.route("/addprof").post(verifyAdmin, addProf);
router.route("/getProf").get(getProf);

router.route("/login").post(loginProf);
router.route("/logout").post(verifyProfessor, logoutProf);

router.route("/getAppliedGroups").get(verifyProfessor, getAppliedGroups);
router
  .route("/selectSummerStudents")
  .post(verifyProfessor, selectSummerStudents);

router.route("/getcurrentProf").get(verifyProfessor, getcurrentProf);

router.route("/incrementLimit").post(verifyAdmin, incrementLimit);

router.route("/getAcceptedStudents").get(verifyProfessor, getAcceptedStudents);

router.route("/deny-group").post(verifyProfessor, denyGroup);
router.route("/accept-group").post(verifyProfessor, acceptGroup);
router.route("/add-remark").post(verifyProfessor, addRemark);
router.route("/meet-attend").post(verifyProfessor, groupAttendance);
router.route("/forgot-pass").post(otpForgotPassword);
router.route("/change-pass").post(changePassword);
router.route("/accepted-groups").get(verifyProfessor, acceptedGroups);
router.route("/merge-groups").post(verifyProfessor, mergeGroups);
router.route("/get-limit").get(verifyProfessor, getLimits);
export default router;
