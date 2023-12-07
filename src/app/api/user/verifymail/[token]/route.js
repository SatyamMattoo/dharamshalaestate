import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import { User } from "@/models/users";

connectDB();

export async function POST(request, { params }) {
  try {
    const { token } = params;

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    if (user.isVerfied) {
      return NextResponse.json(
        { message: "Email already verified" },
        { status: 400 }
      );
    }

    user.isVerfied = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
