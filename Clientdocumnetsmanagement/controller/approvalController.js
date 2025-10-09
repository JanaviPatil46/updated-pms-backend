const Approval = require("../models/Approval");
const sendApprovalEmail = require("../utils/sendApprovalEmail");

// 📌 Request approval
exports.requestApproval = async (req, res) => {
  const { accountId, filename, fileUrl, clientEmail,description } = req.body;

  try {
    // Save in DB
    const approval = new Approval({
      accountId,
      filename,
      fileUrl,
      clientEmail,description
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
        
      // clientEmail: req.params.email,
      // status: "pending",
       accountId: req.params.accountId,
      status: "pending",
    }).sort({ createdAt: -1 });

    res.json({ approvals });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch approvals" });
  }
};

// // 📌 Get all pending approvals for a specific account
exports.getClientApprovalsByAccount = async (req, res) => {
  try {
    const { accountId } = req.params;

    const approvals = await Approval.find({
      accountId: accountId,
      // status: "pending",
    }).sort({ createdAt: -1 });

    res.json({ approvals });
  } catch (err) {
    console.error("Error fetching approvals:", err);
    res.status(500).json({ error: "Failed to fetch approvals" });
  }
};

exports.getPendingApprovalsByAccount = async (req, res) => {
  try {
    const { accountId } = req.params;

    const pendingApprovals = await Approval.find({
      accountId: accountId,
      status: "pending", // filter by pending status
    }).sort({ createdAt: -1 });

    res.json({ pendingApprovals });
  } catch (err) {
    console.error("Error fetching pending approvals:", err);
    res.status(500).json({ error: "Failed to fetch pending approvals" });
  }
};


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
// exports.updateApprovalStatus = async (req, res) => {
//   try {
//     const { action } = req.body; // approve or cancel

//     const updated = await Approval.findByIdAndUpdate(
//       req.params.id,
//       { status: action === "approve" ? "approved" : "cancelled" },
//       { new: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ error: "Approval not found" });
//     }

//     // 📩 Send email to client if approved
//     if (action === "approve") {
//       await sendApprovalEmail({
//         to: updated.clientEmail,
//         subject: "Document Approved",
//         html: `
//           <p>Dear Client,</p>
//           <p>Your document <strong>${updated.filename}</strong> has been approved.</p>
         
          
//         `
//       });
//     }

//     res.json({ success: true, approval: updated });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to update approval" });
//   }
// };
exports.updateApprovalStatus = async (req, res) => {
  try {
    const { action, description,adminUserId } = req.body; // action = 'approve' or 'cancel'
console.log("jhdcsdsd",adminUserId )
    // Update approval status and (optionally) description
    const updated = await Approval.findByIdAndUpdate(
      req.params.id,
      {
        status: action === "approve" ? "approved" : "cancelled",
        ...(description && { description }), // Save reason if provided
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Approval not found" });
    }

    // ✅ Only send email if clientEmail exists
    if (updated.clientEmail) {
      if (action === "approve") {
        await sendApprovalEmail({
          to: adminUserId,
          subject: "#Document Approved",
          html: `
            <p>Dear Client,</p>
            <p>Your document <strong>${updated.filename}</strong> has been approved.</p>
            <p>Thank you for your cooperation.</p>
          `,
        });
      } else if (action === "cancel") {
        await sendApprovalEmail({
          to: adminUserId ,
          subject: "#Document Approval Cancelled",
          html: `
            <p>Dear Client,</p>
            <p>Your document <strong>${updated.filename}</strong> approval request has been cancelled.</p>
            ${description ? `<p><strong>Reason:</strong> ${description}</p>` : ""}
            <p>If you have any questions, please contact your administrator.</p>
          `,
        });
      }
    } else {
      console.log("⚠️ No client email found — skipping email sending");
    }

    // ✅ Return response regardless of email status
    res.json({
      success: true,
      approval: updated,
      message: adminUserId 
        ? "Status updated and email sent"
        : "Status updated (email skipped — client email missing)",
    });
  } catch (err) {
    console.error("Error updating approval status:", err);
    res.status(500).json({ error: "Failed to update approval" });
  }
};
