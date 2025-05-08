import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: "DB connected!" });
  } catch (err) {
    console.error("❌ DB connection failed:", err);
    return NextResponse.json(
      { error: "DB failed", details: err },
      { status: 500 }
    );
  }
}
