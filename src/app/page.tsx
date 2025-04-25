import { Home } from "@/components/home-page";

import db from "@/shared/utils/prisma";

export default async function HomePage() {
  const posts =
    (await db.blog.findMany({
      orderBy: { publishedAt: "desc" },
      take: 6,
      include: {
        stats: true,
      },
    })) || [];

  return <Home posts={posts} snippets={[]} />;
}
