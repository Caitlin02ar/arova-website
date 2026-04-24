import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        });

        await transporter.sendMail({
        from: `"AROVA Website" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL,
        subject: "Arova Website Website Inquiry",
        replyTo: email,
        text: message,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error(error);
        return Response.json({ success: false }, { status: 500 });
    }
}