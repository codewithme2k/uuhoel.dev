import { Link } from "@/components/ui/link";
import Bash from "@/shared/icons/bash.svg";
import CSS from "@/shared/icons/css.svg";
import Exercism from "@/shared/icons/exercism.svg";
import Git from "@/shared/icons/git.svg";
import GitHub from "@/shared/icons/github.svg";
import Goodreads from "@/shared/icons/goodreads.svg";
import HeadlessUI from "@/shared/icons/headlessui.svg";
import Hydrogen from "@/shared/icons/hydrogen.svg";
import IMBb from "@/shared/icons/imdb.svg";
import Java from "@/shared/icons/java.svg";
import Javascript from "@/shared/icons/javascript.svg";
import JWT from "@/shared/icons/jsonwebtokens.svg";
import Koa from "@/shared/icons/koa.svg";
import Liquid from "@/shared/icons/liquid.svg";
import Markdown from "@/shared/icons/markdown.svg";
import MongoDB from "@/shared/icons/mongodb.svg";
import MySQL from "@/shared/icons/mysql.svg";
import NextJS from "@/shared/icons/nextjs.svg";
import Node from "@/shared/icons/nodejs.svg";
import Npm from "@/shared/icons/npm.svg";
import OpenAI from "@/shared/icons/openai.svg";
import Picsum from "@/shared/icons/picsum.svg";
import Prisma from "@/shared/icons/prisma.svg";
import Pygame from "@/shared/icons/pygame.svg";
import Python from "@/shared/icons/python.svg";
import Railway from "@/shared/icons/railway.svg";
import React from "@/shared/icons/react.svg";
import Remix from "@/shared/icons/remix.svg";
import RottenTomatoes from "@/shared/icons/rottentomatoes.svg";
import SemanticUI from "@/shared/icons/semanticui.svg";
import Shopify from "@/shared/icons/shopify.svg";
import Spotify from "@/shared/icons/spotify.svg";
import TailwindCSS from "@/shared/icons/tailwind.svg";
import Turborepo from "@/shared/icons/turborepo.svg";
import Typescript from "@/shared/icons/typescript.svg";
import Umami from "@/shared/icons/umami.svg";
import Vercel from "@/shared/icons/vercel.svg";
import Webpack from "@/shared/icons/webpack.svg";
import VSCode from "@/shared/icons/vscode.svg";
import Drizzle from "@/shared/icons/drizzle.svg";
import Pnpm from "@/shared/icons/pnpm.svg";
import Env from "@/shared/icons/env.svg";
import Html from "@/shared/icons/html5.svg";
import Postcss from "@/shared/icons/postcss.svg";
import Commitlint from "@/shared/icons/commitlint.svg";

export const BrandsMap: Record<
  string,
  {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    url?: string;
  }
> = {
  Commitlint: {
    Icon: Commitlint,
  },
  Html: {
    Icon: Html,
  },
  HTML: {
    Icon: Html,
  },
  Postcss: {
    Icon: Postcss,
  },
  Env: {
    Icon: Env,
  },
  React: {
    Icon: React,
    url: "https://reactjs.org",
  },
  Drizzle: {
    Icon: Drizzle,
    url: "https://orm.drizzle.team/",
  },
  Goodreads: {
    Icon: Goodreads,
    url: "https://www.goodreads.com/",
  },
  Remix: {
    Icon: Remix,
    url: "https://remix.run",
  },
  Git: {
    Icon: Git,
    url: "https://git-scm.com",
  },
  GitHub: {
    Icon: GitHub,
    url: "https://github.com",
  },
  Javascript: {
    Icon: Javascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  JavaScript: {
    Icon: Javascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  Typescript: {
    Icon: Typescript,
    url: "https://www.typescriptlang.org",
  },
  TypeScript: {
    Icon: Typescript,
    url: "https://www.typescriptlang.org",
  },
  Node: {
    Icon: Node,
    url: "https://nodejs.org",
  },
  Npm: {
    Icon: Npm,
    url: "https://www.npmjs.com",
  },
  Bash: {
    Icon: Bash,
    url: "https://www.gnu.org/software/bash",
  },
  Liquid: {
    Icon: Liquid,
    url: "https://shopify.dev/docs/api/liquid",
  },
  Markdown: {
    Icon: Markdown,
    url: "https://www.markdownguide.org",
  },
  NextJS: {
    Icon: NextJS,
    url: "https://nextjs.org",
  },
  TailwindCSS: {
    Icon: TailwindCSS,
    url: "https://tailwindcss.com",
  },
  Prisma: {
    Icon: Prisma,
    url: "https://www.prisma.io",
  },
  Umami: {
    Icon: Umami,
    url: "https://umami.is",
  },
  Vercel: {
    Icon: Vercel,
    url: "https://vercel.com",
  },
  Railway: {
    Icon: Railway,
    url: "https://railway.app",
  },
  Spotify: {
    Icon: Spotify,
    url: "https://spotify.com",
  },
  OpenAI: {
    Icon: OpenAI,
    url: "https://openai.com",
  },
  Turborepo: {
    Icon: Turborepo,
    url: "https://turborepo.org",
  },
  Hydrogen: {
    Icon: Hydrogen,
    url: "https://hydrogen.shopify.dev/",
  },
  Shopify: {
    Icon: Shopify,
    url: "https://shopify.dev",
  },
  Polaris: {
    Icon: Shopify,
    url: "https://polaris.shopify.com/",
  },
  ThemeKit: {
    Icon: Shopify,
    url: "https://shopify.dev/docs/storefronts/themes/tools/theme-kit",
  },
  HeadlessUI: {
    Icon: HeadlessUI,
    url: "https://headlessui.dev",
  },
  Webpack: {
    Icon: Webpack,
    url: "https://webpack.js.org",
  },
  KoaJS: {
    Icon: Koa,
    url: "https://koajs.com",
  },
  JWT: {
    Icon: JWT,
    url: "https://jwt.io",
  },
  MongoDB: {
    Icon: MongoDB,
    url: "https://www.mongodb.com",
  },
  CSS: {
    Icon: CSS,
    url: "https://www.w3.org/Style/CSS/",
  },
  Python: {
    Icon: Python,
    url: "https://www.python.org",
  },
  Pygame: {
    Icon: Pygame,
    url: "https://www.pygame.org",
  },
  Exercism: {
    Icon: Exercism,
    url: "https://exercism.org",
  },
  SemanticUI: {
    Icon: SemanticUI,
    url: "https://semantic-ui.com",
  },
  Picsum: {
    Icon: Picsum,
    url: "https://picsum.photos",
  },
  Java: {
    Icon: Java,
    url: "https://java.com",
  },
  MySQL: {
    Icon: MySQL,
    url: "https://mysql.com",
  },
  RottenTomatoes: {
    Icon: RottenTomatoes,
    url: "https://www.rottentomatoes.com/",
  },
  IMBb: {
    Icon: IMBb,
    url: "https://www.imdb.com/",
  },
  VSCode: {
    Icon: VSCode,
    url: "https://code.visualstudio.com/",
  },
  Pnpm: {
    Icon: Pnpm,
    url: "https://pnpm.io/",
  },
};

export function Brand(props: {
  name: keyof typeof BrandsMap;
  as?: "link" | "icon";
  className?: string;
  iconClassName?: string;
}) {
  const { name, as = "link", className, iconClassName } = props;
  const { Icon, url } = BrandsMap[name] || {};

  if (!Icon)
    return <span className="hidden">Missing brand icon for {name}</span>;

  if (as === "icon" || !url) {
    return <Icon className={className} fill="currentColor" />;
  }

  return (
    <Link href={`${url}?ref=leohuynh.dev`} className={className}>
      <Icon className={iconClassName} fill="currentColor" />
    </Link>
  );
}
