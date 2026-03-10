import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, service, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "akashwaghella@gmail.com",
        pass: "bitt ifar wyav rynh"
      }
    });

    await transporter.sendMail({
      from: email,
      to: "akashwaghella@gmail.com",
      subject: `New Contact Form: ${service}`,
      text: `
        Name: ${name}
        Email: ${email}
        Service: ${service}
        Message: ${message}
      `
    });

    return res.status(200).json({ message: "Email sent ✅" });

  } catch (error) {
    return res.status(500).json({ error: "Error sending email ❌" });
  }
}