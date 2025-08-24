const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Email sending route
app.post("/send-email", async (req, res) => {
  const { name, email, company, message } = req.body;

  // const transporter = nodemailer.createTransport({
  //   service: "Gmail",
  //   auth: {
  //     user: "business@hytgenx.com",
  //     pass: "yowq hjbb jaqc ljtu",
  //   },
  // });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "faizanamir103@gmail.com",
      pass: "gehr jwig stkl unmd",
    },
  });
  

  const mailOptions = {
    from: email,
    to: "business@hytgenx.com",
    subject: `New Contact details Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});
