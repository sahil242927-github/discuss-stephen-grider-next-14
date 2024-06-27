import { test } from "@/actions/test";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    randomNumber: Math.floor(Math.random() * (1000 - 100) + 100),
  });
}
