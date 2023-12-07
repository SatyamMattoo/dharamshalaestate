import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import { Property } from "@/models/properties";

connectDB();

export async function GET(request, { params }) {
  try {
    const reqBody = await request.json();
    const { id } = reqBody;
    const property = await Property.findById(id);

    if (!property) {
      return NextResponse.json(
        { message: "Property not found!" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, property }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
