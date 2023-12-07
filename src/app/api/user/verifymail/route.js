import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/mailer";
import { connectDB } from "@/utils/connectDB";
import { User } from "@/models/users";
import { getDataFromToken } from "@/utils/getTokenData";

connectDB();

export async function POST(request, { params }) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return NextResponse.json(
        { error: "Please login first" },
        { status: 400 }
      );
    }

    await sendEmail({
      email: user.email,
      emailType: "VERIFY",
      userId: user._id,
    });

    return NextResponse.json({
      message: `Verification link sent to ${user.email}`,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
