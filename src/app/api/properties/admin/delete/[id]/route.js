import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import { User } from "@/models/users";
import { getDataFromToken } from "@/utils/getTokenData";
import { Property } from "@/models/properties";

connectDB();

export async function DELETE(request, { params }) {
  try {
    const propertyId = params.id;
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return NextResponse.json(
        { error: "Please login first" },
        { status: 400 }
      );
    }

    if (!user.isAdmin) {
      return NextResponse.json(
        { error: "This is a admin role" },
        { status: 400 }
      );
    }
    const property = await Property.findById(propertyId);

    if (!property) {
      return NextResponse.json(
        { message: "Property not found!" },
        { status: 404 }
      );
    }

    await Property.findByIdAndDelete(propertyId);

    return NextResponse.json(
      { messsage: "Property deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
