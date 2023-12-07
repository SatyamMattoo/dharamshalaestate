import { User } from "@/models/users";
import { connectDB } from "@/utils/connectDB";
import { getDataFromToken } from "@/utils/getTokenData";
import { NextResponse } from "next/server";

await connectDB();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    if (!userId) {
      return NextResponse.json({
        success: false,
        mesaaage: "Please login to access this resource",
      });
    }
    const user = await User.findOne({ _id: userId });
    return NextResponse.json({
      mesaaage: "User found",
      user,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
