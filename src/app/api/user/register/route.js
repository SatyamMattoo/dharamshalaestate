import { connectDB } from "@/utils/connectDB";
import { User } from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

await connectDB();

export async function POST(request) {
  const { name, email, password } = await request.json();

  try {
    let user = await User.findOne({ email: email });
    if (user) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_KEY, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: `Registered successfully as ${user.name}`,
      success: true,
      user,
    });

    response.cookies.set("token", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    return response;
  } catch (error) {
    console.log(error);

    if (error.name === "ValidationError") {
      // Handle validation errors
      const errors = Object.keys(error.errors).map((key) => {
        return {
          field: key,
          message: error.errors[key].message,
        };
      });

      return NextResponse.json({
        success: false,
        errors,
        message: "Validation errors",
      });
    } else {
      // Handle other errors
      return NextResponse.json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
}
