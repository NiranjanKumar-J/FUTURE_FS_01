const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// Connect to Database (Cached connection for speed)
let isConnected = false;
const connectToDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Error:", error);
  }
};

// Define Schema (Simple logic)
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// Main Server Function (Vercel handle pannikkum)
module.exports = async (req, res) => {
  // Allow CORS (Frontend connect panna)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    await connectToDB();
    const { name, email, message } = req.body;

    // 1. Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 2. Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'krpradeepakr6@gmail.com', // Un friend email or un email
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Email sent & Saved!' });

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
};