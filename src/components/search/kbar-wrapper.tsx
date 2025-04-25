"use client";

import { useRouter } from "next/navigation";
import { Blog } from "@/generated/prisma";
import { KBarSearchProvider } from "./kbar-provider";
import type { Action } from "kbar";

export function KBarWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <KBarSearchProvider
      configs={{
        searchDocumentsPath: "/api/search/posts",
        defaultActions: [
          {
            id: "home",
            name: "Go to Home",
            shortcut: ["h"],
            keywords: "home landing",
            perform: () => router.push("/"),
          },
        ],
        onSearchDocumentsLoad: (json) =>
          json.map(
            (post: Blog): Action => ({
              id: post.path,
              name: post.title,
              keywords: post.summary || "",
              section: "Content",
              subtitle: new Date(post.date).toLocaleDateString(),
              perform: () => router.push("/" + post.path),
            })
          ),
      }}
    >
      {children}
    </KBarSearchProvider>
  );
}
