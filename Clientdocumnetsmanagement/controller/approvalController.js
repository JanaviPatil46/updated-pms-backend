const Approval = require("../models/Approval");
const sendApprovalEmail = require("../utils/sendApprovalEmail");

// 📌 Request approval
exports.requestApproval = async (req, res) => {
  const { accountId, filename, fileUrl, clientEmail } = req.body;

  try {
    // Save in DB
    const approval = new Approval({
      accountId,
      filename,
      fileUrl,
      clientEmail,
    });
    await approval.save();

    // Send email
    await sendApprovalEmail({
      to: clientEmail,
      subject: "Document Approval Request",
      html: `
        <p>Hello,</p>
        <p>You have a new document approval request</p>
         <p><strong>Document Name:</strong> ${filename}</p>
         <p>Please login to your account and approve it:</p>
      `,
    });
//  <p><a href="${fileUrl}" target="_blank">${filename}</a></p>
    res.json({
      message: "Approval request sent and saved",
      approvalId: approval._id,
    });
  } catch (err) {
    console.error("Request approval error:", err);
    res.status(500).json({ error: "Failed to send approval request" });
  }
};

// 📌 Get all pending approvals for client
exports.getClientApprovals = async (req, res) => {
  try {
    const approvals = await Approval.find({
        
      clientEmail: req.params.email,
      status: "pending",
    }).sort({ createdAt: -1 });

    res.json({ approvals });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch approvals" });
  }
};

// // 📌 Get all pending approvals for a specific account
// exports.getClientApprovals = async (req, res) => {
//   try {
//     const { accountId } = req.params;

//     const approvals = await Approval.find({
//       accountId: accountId,
//       status: "pending",
//     }).sort({ createdAt: -1 });

//     res.json({ approvals });
//   } catch (err) {
//     console.error("Error fetching approvals:", err);
//     res.status(500).json({ error: "Failed to fetch approvals" });
//   }
// };

// // 📌 Update approval status
// exports.updateApprovalStatus = async (req, res) => {
//   try {
//     const { action } = req.body; // approve or cancel
//     const updated = await Approval.findByIdAndUpdate(
//       req.params.id,
//       { status: action === "approve" ? "approved" : "cancelled" },
//       { new: true }
//     );

//     res.json({ success: true, approval: updated });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to update approval" });
//   }
// };

// 📌 Update approval status and send email
exports.updateApprovalStatus = async (req, res) => {
  try {
    const { action } = req.body; // approve or cancel

    const updated = await Approval.findByIdAndUpdate(
      req.params.id,
      { status: action === "approve" ? "approved" : "cancelled" },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Approval not found" });
    }

    // 📩 Send email to client if approved
    if (action === "approve") {
      await sendApprovalEmail({
        to: updated.clientEmail,
        subject: "Document Approved",
        html: `
          <p>Dear Client,</p>
          <p>Your document <strong>${updated.filename}</strong> has been approved.</p>
         
          
        `
      });
    }

    res.json({ success: true, approval: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update approval" });
  }
};