/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type { Action } from "kbar";
import { KBarProvider } from "kbar";
import { useRouter } from "next/navigation.js";
import { useEffect, useState, type ReactNode } from "react";

import { KBarModal } from "./kbar-modal";
import { Blog } from "@/generated/prisma";

export interface KBarSearchProps {
  searchDocumentsPath: string | false;
  defaultActions?: Action[];
  onSearchDocumentsLoad?: (json: any) => Action[];
}

export interface KBarConfig {
  provider: "kbar";
  kbarConfig: KBarSearchProps;
}

export function KBarSearchProvider({
  configs,
  children,
}: {
  configs: KBarSearchProps;
  children: ReactNode;
}) {
  const { searchDocumentsPath, defaultActions, onSearchDocumentsLoad } =
    configs;
  const router = useRouter();
  const [searchActions, setSearchActions] = useState<Action[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    function mapPosts(posts: Blog[]) {
      const actions: Action[] = [];
      for (const post of posts) {
        actions.push({
          id: post.path,
          name: post.title,
          keywords: post?.summary || "",
          section: "Content",
          subtitle: post.date.toString(),
          perform: () => router.push("/" + post.path),
        });
      }
      return actions;
    }
    async function fetchData() {
      if (searchDocumentsPath) {
        const url =
          searchDocumentsPath.indexOf("://") > 0 ||
          searchDocumentsPath.indexOf("//") === 0
            ? searchDocumentsPath
            : new URL(searchDocumentsPath, window.location.origin);
        const res = await fetch(url);
        const json = await res.json();
        const actions = onSearchDocumentsLoad
          ? onSearchDocumentsLoad(json)
          : mapPosts(json);
        setSearchActions(actions);
        setDataLoaded(true);
      }
    }
    if (!dataLoaded && searchDocumentsPath) {
      fetchData();
    } else {
      setDataLoaded(true);
    }
  }, [
    defaultActions,
    dataLoaded,
    router,
    searchDocumentsPath,
    onSearchDocumentsLoad,
  ]);

  return (
    <KBarProvider actions={defaultActions}>
      <KBarModal actions={searchActions} isLoading={!dataLoaded} />
      {children}
    </KBarProvider>
  );
}
