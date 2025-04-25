"use client";

import { StatsType } from "@/generated/prisma";
import { useEffect } from "react";

import {
  useBlogStats,
  useUpdateBlogStats,
} from "@/shared/hooks/use-blog-stats";

export function ViewsCounter({
  type,
  slug,
  className,
}: {
  type: StatsType;
  slug: string;
  className?: string;
}) {
  const [stats, isLoading] = useBlogStats(type, slug);
  const updateView = useUpdateBlogStats();

  useEffect(() => {
    if (!isLoading && stats) {
      updateView({ type, slug, views: stats["views"] + 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats, isLoading]);

  return (
    <span className={className}>
      {isLoading ? "---" : (stats["views"] || 0) + " views"}
    </span>
  );
}
