import { Blog, Stats } from "@/generated/prisma";

import { Banner } from "@/components/blog/banner";
import { BlogMeta } from "@/components/blog/blog-meta";
import { PostNav } from "@/components/blog/post-nav";
import { TagsList } from "@/components/blog/tags";

import { Container } from "@/components/ui/container";

import { SITE_METADATA } from "@/data/site-metadata";
import { GradientDivider } from "@/components/ui/gradient-divider";
import { PostTitle } from "@/components/blog/post-title";
import { SocialShare } from "@/components/blog/social-share";
import Reactions from "@/components/blog/reactions";
import { Comments } from "@/components/blog/comments";

interface LayoutProps {
  content: Blog & { stats?: Stats | null };

  next?: { path: string; title: string } | undefined;
  prev?: { path: string; title: string } | undefined;
  children?: React.ReactNode;
}

export function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { slug, images, stats, readingTime, date, title, tags } = content;

  return (
    <Container className="pt-4 lg:pt-12">
      <article className="pt-6">
        <div className="space-y-4">
          <TagsList tags={tags} />
          <PostTitle>{title}</PostTitle>
          <div className="space-y-4 pt-4 md:pt-10">
            <Banner banner={images?.[0] || SITE_METADATA.socialBanner} />
          </div>
          <div className="flex items-center justify-between gap-2 pb-4 lg:pt-2">
            <BlogMeta
              date={date}
              lastmod={""}
              type={stats?.type}
              slug={slug}
              readingTime={readingTime}
            />
            <SocialShare
              postUrl={`${process.env.NEXT_PUBLIC_APP_URL}blog/${slug}`}
              filePath={slug}
              title={title}
              className="hidden md:flex"
            />
          </div>
        </div>
        <GradientDivider className="mb-2 mt-1" />
        <div className="grid grid-cols-1 gap-12 pb-10 pt-8 lg:grid-cols-12 lg:pt-10">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 lg:col-span-8 xl:col-span-9">
            <div className="prose max-w-none dark:prose-invert lg:prose-lg lg:pb-8">
              {children}
            </div>
          </div>
          <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
            <div className="space-y-4 divide-y divide-gray-200 dark:divide-gray-700 lg:sticky lg:top-24">
              {/* <BackToPosts label="Back to posts" /> */}
              {/* <TableOfContents toc={toc} /> */}
              <Reactions className="pt-6" type={stats!.type} slug={slug} />
              <div className="hidden"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <PostNav
            next={next}
            nextLabel="Next post"
            prev={prev}
            prevLabel="Previous post"
          />
          <Comments configs={{ reactions: "0" }} />
        </div>
      </article>
    </Container>
  );
}
