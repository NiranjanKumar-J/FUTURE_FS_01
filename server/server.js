const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// --- MIDDLEWARE ---
app.use(cors());
app.use(bodyParser.json());

// --- MONGODB CONNECTION ---
// NOTE: Inga 'useNewUrlParser' pondra entha options-um illa. Direct Link thaan!
const MONGO_URI = 'mongodb+srv://niranjankumarj37_db_user:NiranjanProject2025@cluster0.nvwmguc.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGO_URI)
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => {
  console.log('❌ DB Connection Error:', err.message);
  console.log('💡 Tip: Try connecting via Mobile Hotspot if using WiFi.');
});

// --- SCHEMA ---
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// --- EMAIL CONFIGURATION ---
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jniranjankumar371@gmail.com',
    pass: 'nqzcbzmekjpuepei' // <-- UNGA 16-DIGIT APP PASSWORD INGA PODU
  }
});

// --- API ROUTE ---
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("📝 Message Saved to Database");

    const mailOptions = {
      from: email,
      to: 'jniranjankumar371@gmail.com',
      subject: `🚀 Portfolio Message from: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    console.log("📧 Email Sent!");

    res.status(201).json({ message: "Success!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: "Failed." });
  }
});

// --- SERVER START ---
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});