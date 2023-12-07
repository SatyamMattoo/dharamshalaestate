import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "@/utils/connectDB";
import { User } from "@/models/users";

connectDB();

export async function POST(request, { params }) {
  try {
    const { token } = params;
    const reqBody = await request.json();
    const { newPassword, confirmPassword } = reqBody;

    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords don't match" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      message: "Password changed successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
