// api/contact.js (Node.js Serverless Function using ES Module syntax)

import nodemailer from 'nodemailer'; // Use import instead of require

// This function will be called automatically by Vercel when a request hits the /api/contact URL
export default async function (req, res) {
  // Only allow POST requests for security
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const { name, phone, message } = req.body;

  // 1. Create Nodemailer Transporter
  // Credentials (user/pass) are securely read from Vercel's Environment Variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,    
      pass: process.env.EMAIL_APP_PASS, 
    },
  });

  // 2. Define Email Content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'chandumineralwater@gmail.com', // The email address that receives the orders
    subject: `NEW ORDER INQUIRY: ${name} (${phone})`,
    html: `
      <h2>New Website Order Inquiry for Chandu Mineral Water</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
      <p><strong>Message/Order:</strong> ${message}</p>
      <hr>
      <p>— Sent from your Vercel Contact API</p>
    `,
  };

  // 3. Send the Email
  try {
    await transporter.sendMail(mailOptions);
    // Success: Return a 200 status
    return res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    // Failure: If login/authentication fails, this is where the error is caught
    console.error('Nodemailer Error:', error);
    return res.status(500).send({ message: 'Failed to send email. Check Vercel logs.' });
  }
}