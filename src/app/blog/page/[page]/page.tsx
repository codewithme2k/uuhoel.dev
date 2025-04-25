import { ListLayout } from "@/shared/layouts/list-layout";
import { POSTS_PER_PAGE } from "@/shared/utils/const";
import db from "@/shared/utils/prisma";

// Fetching the total number of posts
export const generateStaticParams = async () => {
  const totalPosts = await db.blog.count(); // Get total number of posts
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
  return paths;
};

export default async function Page(props: { params: { page: string } }) {
  const pageNumber = parseInt(props.params.page, 10);

  // Fetching posts with pagination
  const posts = await db.blog.findMany({
    orderBy: { publishedAt: "desc" },
    skip: POSTS_PER_PAGE * (pageNumber - 1),
    take: POSTS_PER_PAGE,
  });

  const totalPosts = await db.blog.count(); // Get total number of posts
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(totalPosts / POSTS_PER_PAGE),
  };

  return (
    <ListLayout
      posts={posts} // Pass the paginated posts
      initialDisplayPosts={posts} // Same for initial display (since it's already paginated)
      pagination={pagination}
      title="All posts"
    />
  );
}
