import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/mailer";
import { connectDB } from "@/utils/connectDB";
import { User } from "@/models/users";
import { getDataFromToken } from "@/utils/getTokenData";

connectDB();

export async function POST(request) {
  try {
    const { email } = await request.json();
    const user = await User.findOne({ email:email });

    if (!user) {
      return NextResponse.json(
        { error: "User with this mail not found!" },
        { status: 400 }
      );
    }

    if(!user.password){
      return NextResponse.json(
        { error: "User with this mail not found!" },
        { status: 400 }
      );
    }

    await sendEmail({
      email: user.email,
      emailType: "RESET",
      userId: user._id,
    });

    return NextResponse.json({
      message: " Reset link sent successfully, please check your mail.",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
