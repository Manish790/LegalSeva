const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const nodemailer=require("nodemailer")
const cors = require("cors");
const bodyParser = require("body-parser");
//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//middlewares
app.use(express.json());
app.use(moragan("dev"));
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
// Create an endpoint to send an email
const transporter = nodemailer.createTransport({
  service: "gmail", // Replace with your email service provider (e.g., Gmail)
  auth: {
    user: "legalseva2023@gmail.com",
    pass: "nitx hkto scgj covg",
  },
});

// Create an endpoint to send an email
app.post("/api/v1/send-email", async (req, res) => {
  const { userName, userEmail, date, doctorName, doctorProfile, time, userId } =
    req.body;

  try {
    // Send the email
    await transporter.sendMail({
      from: "legalseva2023@gmail.com",
      to: userEmail,
      subject: "Booking Confirmation",
      text: `Dear ${userName},

Greetings from Legal Seva!

We are pleased to inform you that your appointment has been successfully scheduled with ${doctorProfile} ${doctorName} on ${date}.

Appointment Details:
-${doctorProfile}:${doctorName}
- Date: ${date}
-Time: ${time}
-Booking Reference No: ${userId}

Please make sure to arrive at least 15 minutes before your scheduled appointment time. If you have any questions or need to reschedule, please don't hesitate to contact us.

We look forward to seeing you at our clinic.

Best regards,
Legal Seva Team`,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});


//port
const port = process.env.PORT || 4000;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
