import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

// Store your hashed password here (bcrypt hash of "yourSuperSecurePassword")
const HASHED_PASSWORD = "$2a$12$2pC3zAbMYRA.E.SWbuIL6.WPXQNrP2C2a6sf4HtQl/rNJxFuv71ai"; // Change this!

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json({ error: "Missing password" }, { status: 400 });
    }

    const match = await bcrypt.compare(password, HASHED_PASSWORD);

    if (!match) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("🚨 Admin login error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
