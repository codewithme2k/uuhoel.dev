/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatDate, getTimeAgo } from "@/shared/utils/misc";
import { ViewsCounter } from "./views-counter";

type BlogMetaProps = {
  date: Date;
  lastmod?: string;
  slug: string;
  type: any;
  readingTime: any;
};

export function BlogMeta({
  date,
  lastmod,
  type,
  slug,
  readingTime,
}: BlogMetaProps) {
  return (
    <dl>
      <dt className="sr-only">Published on</dt>
      <dd className="flex flex-wrap items-center gap-2 text-sm font-medium leading-6 text-gray-500 dark:text-gray-400 md:text-base">
        <time
          dateTime={date.toString()}
          className="flex items-center justify-center"
        >
          <span>{formatDate(date.toString())}</span>
          {lastmod && (
            <time
              dateTime={date.toString()}
              className="ml-1.5 hidden items-center justify-center md:ml-2 md:flex"
            >
              (<span>updated</span>
              <span className="ml-1.5">{getTimeAgo(lastmod)}</span>)
            </time>
          )}
        </time>
        <span className="text-gray-300 dark:text-gray-700">/</span>
        <span>{Math.ceil(readingTime.minutes)} mins read</span>
        <span className="text-gray-300 dark:text-gray-700">/</span>
        <ViewsCounter type={type} slug={slug} />
      </dd>
    </dl>
  );
}
