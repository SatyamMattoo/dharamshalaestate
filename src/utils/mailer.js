import nodemailer from "nodemailer";
import crypto from "crypto";
import { User } from "@/models/users";

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    console.log(userId, email, emailType);
    const token = crypto.randomBytes(20).toString("hex");
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      auth: {
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: email,
      subject: "Reset your password",
      html: `
      
      <Html>
      <h2> Hello there! </h2>
      <h4>
        We received the reset password request. If it's not you then pls ignore
        it.
      </h4>
      <button
        style={{ background: "blue", color: "#FFFFFF",padding:"20px" }}
      >
      <a href="${
        process.env.DOMAIN
      }/forgotpassword/${hashedToken}">Click here</a>
      </button>
      <Hr />

      <h3>Regards</h3>
      <h4>Dharamshala Estate</h4>
    </Html>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
