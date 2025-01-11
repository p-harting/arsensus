import { NextResponse } from "@/node_modules/next/server"
import { prisma } from "@/prisma"

export async function GET() {
  try {
    const events = await prisma.events.findMany()

    return NextResponse.json(events)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch timezones' },
      { status: 500 }
    )
  }
}