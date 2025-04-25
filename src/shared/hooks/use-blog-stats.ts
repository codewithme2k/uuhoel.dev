import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { fetcher } from "@/shared/utils/misc";
import { Stats, StatsType } from "@/generated/prisma";
export type SelectStats = Stats;

export function useBlogStats(type: StatsType, slug: string) {
  const { data, isLoading } = useSWR<Stats>(
    `/api/stats?slug=${slug}&type=${type}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  // Khởi tạo dữ liệu stats với giá trị mặc định nếu không có dữ liệu
  const { views, loves, applauses, ideas, bullseye } = data || {};
  const stats: Stats = {
    id: "",
    type,
    slug,
    views: views ?? 0,
    loves: loves ?? 0,
    applauses: applauses ?? 0,
    ideas: ideas ?? 0,
    bullseye: bullseye ?? 0,
  };

  return [stats, isLoading] as const;
}

export function useUpdateBlogStats() {
  const { trigger } = useSWRMutation(
    "/api/stats",
    async (url: string, { arg }: { arg: Partial<SelectStats> }) => {
      // Gửi dữ liệu lên API để cập nhật thông qua Prisma
      return fetch(url, {
        method: "POST",
        body: JSON.stringify(arg),
        headers: {
          "Content-Type": "application/json",
        },
      }).catch(console.error);
    }
  );

  return trigger;
}
