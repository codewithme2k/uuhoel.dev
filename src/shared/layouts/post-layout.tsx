import { Blog } from "@/generated/prisma";
import type { ReactNode } from "react";

import { Banner } from "@/components/blog/banner";
import { BlogMeta } from "@/components/blog/blog-meta";

import { TagsList } from "@/components/blog/tags";

import { Container } from "@/components/ui/container";

import { SITE_METADATA } from "@/data/site-metadata";
import { GradientDivider } from "@/components/ui/gradient-divider";
import { PostTitle } from "@/components/blog/post-title";
interface LayoutProps {
  content: Blog;
  authorDetails: any[];
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
  children: ReactNode;
}

export function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { slug, images, lastmod, readingTime, date, filePath, title, tags } =
    content;

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
              type={""}
              slug={slug}
              readingTime={readingTime}
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

              <div className="hidden"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* <PostNav
            next={next}
            nextLabel="Next post"
            prev={prev}
            prevLabel="Previous post"
          /> */}
        </div>
      </article>
    </Container>
  );
}
