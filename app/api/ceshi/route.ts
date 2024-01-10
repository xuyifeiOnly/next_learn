import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<NextResponse> {
  return NextResponse.json({
    code: Date.now().toString()+'好的',
  });
}
