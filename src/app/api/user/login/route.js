import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@/models/users";

await connectDB();
export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const user = await User.findOne({
      email: email,
    }).select("+password");

    if (user == null) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password!",
        },
        { status: 400 }
      );
    }

    if(!user.password){
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password!",
        },
        { status: 400 }
      );
    }
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password!",
        },
        { status: 400 }
      );
    }
    
    //create token
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_KEY, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: `Logged in successfully as ${user.name}`,
      success: true,
      user,
    });

    response.cookies.set("token", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
