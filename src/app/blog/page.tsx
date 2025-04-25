import { ListLayout } from "@/shared/layouts/list-layout";
import { POSTS_PER_PAGE } from "@/shared/utils/const";

import db from "@/shared/utils/prisma";

export default async function BlogPage() {
  const posts = await db.blog.findMany({
    orderBy: { publishedAt: "desc" },
  });

  const pageNumber = 1;
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All posts"
    />
  );
}
