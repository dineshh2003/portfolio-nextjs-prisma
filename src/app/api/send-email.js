// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or any other email service you use
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS, // your email password or an app-specific password
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'dinujangid89@gmail.com',
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
      
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
