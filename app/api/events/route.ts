import { NextRequest, NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const contentType = request.headers.get("content-type") ?? "";
    let event;

    try {
      if (contentType.includes("application/json")) {
        event = await request.json();
      } else {
        const formData = await request.formData();
        event = Object.fromEntries(formData.entries());
      }
    } catch (e) {
      return NextResponse.json(
        { message: "Invalid request body format" },
        { status: 400 },
      );
    }

    const createdEvent = await Event.create(event);

    return NextResponse.json(
      { message: "Event created successfully", event: createdEvent },
      { status: 201 },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        message: "Event Creation Failed",
        error: e instanceof Error ? e.message : "Unknown",
      },
      { status: 500 },
    );
  }
}
