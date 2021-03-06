const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const {
  addStaffMember,
  GetAllMemebrDetails,
  DeleteMember,
  GetAllStaffMemebrDetails,
  GetAllSupervisorDetails,
  UpdateMemberDetails,
} = require("../controllers/Admin/admin-controller");
const {
  signin,
  studentSignup,
  supervisorSignup,
  getGroupDetailsById,
  GetAllGroupDetails,
  UpdatePanel,
  getMemberDetailsById,
  UpdateStudentGrpPanel,
} = require("../controllers/auth-controller");
const {
  UpdateCoSupervisorInStudentGroup,
} = require("../controllers/coSupervisor/coSupervisor-controller");
const {
  UpdateStudentGroupDetails,
} = require("../controllers/Students/students-controller");
const {
  UpdateSupervisorInStudentGroup,
  UpdateSupervisorDetails,
} = require("../controllers/Supervisor/supervisor-controller");
// const { Signupp } = require("../controllers/demo-controller");
// const { studentSignup } = require("../controllers/register-auth-controller");
// const {
//   supervisorSignup,
// } = require("../controllers/supervisor-register-auth-controller");

const {
  isRequestValidated,
  validateSignupRequest,
  validateSigninRequest,
} = require("../validators/auth");
const router = express.Router();

router.post(
  "/student/signup",
  studentSignup,
  isRequestValidated,
  validateSignupRequest
);

router.post(
  "/supervisor/signup",
  supervisorSignup,
  isRequestValidated,
  validateSigninRequest
);

router.post("/signin", signin);
router.get(
  "/student/group-details/:groupId",
  requireSignin,
  getGroupDetailsById,
  validateSigninRequest
);

router.post(
  "/admin/staffMember/add",
  requireSignin,
  //adminMiddleware,
  addStaffMember
);

router.get("/admin/group-details", requireSignin, GetAllGroupDetails);
router.get(
  "/admin/members",
  requireSignin,
  //adminMiddleware,
  GetAllMemebrDetails
);
router.post("/admin/group-detail/update/:groupId", UpdatePanel, requireSignin);
router.get(
  "/admin/member/:memberId",
  requireSignin,
  // adminMiddleware,
  getMemberDetailsById
);

router.delete("/admin/members/delete/:memberId", DeleteMember);
router.get(
  "/admin/staff-members",
  requireSignin,
  //adminMiddleware,
  GetAllStaffMemebrDetails
);

router.get(
  "/admin/supervisors",
  requireSignin,
  //adminMiddleware,
  GetAllSupervisorDetails
);

router.patch(
  "/admin/groupDetails/update",
  requireSignin,
  UpdateStudentGrpPanel
  //adminMiddleware
);

router.patch(
  "/admin/member/update",
  requireSignin,
  UpdateMemberDetails
  //adminMiddleware
);

router.patch(
  "/supervisor/studentUser/update/:groupId",
  requireSignin,
  UpdateSupervisorInStudentGroup
  //adminMiddleware
);

router.patch(
  "/coSupervisor/studentUser/update/:groupId",
  requireSignin,
  UpdateCoSupervisorInStudentGroup
);

router.patch(
  "/student/groupDetails/update/:groupId",
  requireSignin,
  UpdateStudentGroupDetails
  //adminMiddleware
);

router.patch(
  "/supervisor/update/:supervisorId",
  requireSignin,
  UpdateSupervisorDetails
  //adminMiddleware
);
module.exports = router;
