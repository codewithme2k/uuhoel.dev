import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { fetcher } from "@/shared/utils/misc";
import { Stats } from "@/generated/prisma";
// Import kiểu dữ liệu từ Prisma Client

// Kiểu SelectStats lấy từ Stats model trong Prisma Client
export type SelectStats = Stats;

export function useBlogStats(type: Stats, slug: string) {
  // Sử dụng useSWR để lấy dữ liệu từ API
  const { data, isLoading } = useSWR<SelectStats>(
    `/api/stats?slug=${slug}&type=${type}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  // Khởi tạo dữ liệu stats với giá trị mặc định nếu không có dữ liệu
  const { views, loves, applauses, ideas, bullseyes } = data || {};
  const stats: SelectStats = {
    slug,
    views: views ?? 0,
    loves: loves ?? 0,
    applauses: applauses ?? 0,
    ideas: ideas ?? 0,
    bullseyes: bullseyes ?? 0,
    id: "",
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
