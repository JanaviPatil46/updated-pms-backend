const express = require("express");
const router = express.Router();
const approvalController = require("../controller/approvalController");

router.post("/request-approval", approvalController.requestApproval);
router.get("/client-approvals/:accountId", approvalController.getClientApprovals);
router.patch("/client-approvals/:id", approvalController.updateApprovalStatus);
router.get("/approvalList/byaccountid/:accountId", approvalController.getClientApprovalsByAccount);
module.exports = router;
