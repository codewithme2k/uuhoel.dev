import { PostLayout } from "@/shared/layouts/post-layout";
import db from "@/shared/utils/prisma";

export const generateStaticParams = async () => {
  const posts = await db.blog.findMany({
    select: { slug: true },
  });

  return posts.map((post) => ({ slug: post.slug }));
};

export default async function BlogSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const allPosts = await db.blog.findMany({
    orderBy: { publishedAt: "desc" },
  });

  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);

  if (currentIndex === -1) {
    return <div>Post not found</div>;
  }

  const currentPost = allPosts[currentIndex];
  const next = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prev =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Optional: Fetch author details if needed
  // const authorDetails = await db.user.findMany({
  //   where: { id: { in: currentPost.authors } },
  // });

  return (
    <PostLayout
      content={currentPost}
      authorDetails={[]}
      next={next}
      prev={prev}
    />
  );
}
