import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import { Property } from "@/models/properties";

connectDB();

export async function GET(request) {
  try {
    const property = await Property.find({ status: "sold" });

    if (!property) {
      return NextResponse.json(
        { message: "Properties not found!" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, property }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
