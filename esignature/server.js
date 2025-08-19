const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
const docuseal = require('@docuseal/api');
const API_KEY = process.env.DOCUSEAL_API_KEY;
const axios = require('axios');
const transporter = require("./nodemaile.js");
docuseal.configure({
  key: process.env.DOCUSEAL_API_KEY, // best practice: use .env
  url: "https://api.docuseal.com"
});
app.get('/api/generate-token', (req, res) => {
  try {

      const { url, name } = req.query;

    if (!url) return res.status(400).json({ error: 'Missing file URL' });

    const token = jwt.sign(
      {
       user_email: 'tax+test@snptaxandfinancials.com', // who is signing
        integration_email: 'taxteam@snptaxandfinancials.com',
         name: name || 'Doc',
        document_urls: [url],
        external_id:'template-' + Date.now(),
              
    
      },
      API_KEY,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate token' });
  }
});


app.get("/api/get-submission-file", async (req, res) => {
  const { submissionId } = req.query;

  if (!submissionId) return res.status(400).json({ error: "Missing submission ID" });

  try {
    const response = await axios.get(`https://api.docuseal.com/v1/submissions/${submissionId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const downloadUrl = response.data?.download_url;

    if (downloadUrl) {
      res.json({ downloadUrl });
    } else {
      res.status(404).json({ error: "Download URL not found" });
    }
  } catch (err) {
    console.error("DocuSeal fetch error:", err.message);
    res.status(500).json({ error: "Failed to fetch submission" });
  }
});
app.use("/esignuploads", express.static(path.join(__dirname, "uploads")));

app.get('/api/submissions', async (req, res) => {
  try {
    const { data, pagination } = await docuseal.listSubmissions({ limit: 10 });
    res.json({ submissions: data, pagination });
    // console.log("submission",data )
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch submissions', details: err.message });
  }
});

app.post("/notify-admin", async (req, res) => {
  const { clientName, documentName } = req.body;

  const mailOptions = {
    from: `"Signature Alert" <${process.env.EMAIL}>`,
    to: process.env.ADMIN_EMAIL, // Admin email
    subject: "#Document Signed Notification",
    text: `Document "${documentName}" was successfully signed by "${clientName}".`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Notification email sent to admin." });
  } catch (error) {
    console.error("Email send failed:", error);
    res.status(500).json({ error: "Failed to send notification email." });
  }
});


const PORT = process.env.PORT || 8016;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

