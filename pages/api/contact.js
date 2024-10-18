import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, requestType, message } = req.body;

    // Nodemailerでメールを送信
    const transporter = nodemailer.createTransport({
      host: "smtp.your-email-provider.com", // あなたのメールプロバイダーのSMTPサーバー
      port: 465, // SSL用のポート
      secure: true, // true for 465, false for other ports
      auth: {
        user: "your-email@example.com", // Cloudflare Email Routingで設定した転送元アドレス
        pass: "your-email-password", // パスワード
      },
    });

    try {
      await transporter.sendMail({
        from: email, // 送信者のメールアドレス
        to: "contact@yourdomain.com", // Cloudflare Email Routingの宛先アドレス
        subject: `${name} からのお問い合わせ - ${requestType}`,
        text: message,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
