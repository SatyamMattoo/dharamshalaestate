import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import { User } from "@/models/users";
import { getDataFromToken } from "@/utils/getTokenData";
import { Property } from "@/models/properties";

connectDB();

export async function POST(request) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId });
    const req = request.json();

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
    const { title, description, price, image } = req;

    // Process image data
    const imageData = {
      public_id: image.public_id,
      url: image.url,
    };

    // Create property object
    const property = new Property({
      title,
      description,
      price,
      images: [imageData],
    });

    // Save property to database
    await property.save();
    return NextResponse.json(
      { messsage: "Property created successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
