"use server";

import db from "@/shared/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await db.blog.findMany({
    select: {
      title: true,
      path: true,
      summary: true,
      date: true,
    },
    orderBy: {
      date: "desc",
    },
  });

  return NextResponse.json(posts);
}
