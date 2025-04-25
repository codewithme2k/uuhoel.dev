import { PrismaClient } from "@/generated/prisma";

const db = new PrismaClient();

const titleStart = [
  "Mastering",
  "Exploring",
  "Improving",
  "Understanding",
  "Crafting",
  "Enhancing",
  "A Guide to",
  "The Power of",
  "Level Up Your",
  "Behind the Scenes of",
];

const titleEnd = [
  "Responsive Images",
  "HTML Performance",
  "JavaScript Rendering",
  "CSS Layouts",
  "Accessibility in Web",
  "Frontend Optimization",
  "Modern Web Development",
  "SEO Strategies",
  "Web Components",
  "User Experience",
];

function getRandomTitle() {
  const start = titleStart[Math.floor(Math.random() * titleStart.length)];
  const end = titleEnd[Math.floor(Math.random() * titleEnd.length)];
  return `${start} ${end}`;
}

async function main() {
  const posts = Array.from({ length: 20 }).map((_, i) => {
    const title = getRandomTitle();
    return {
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-") + `-${i + 1}`,
      path: `/blog/${title.toLowerCase().replace(/\s+/g, "-")}-${i + 1}`,
      content: `## Introduction\n\nThis blog post is about: **${title}**.\n\nWe’ll dive deep into how you can improve your frontend game.\n\nHappy coding 🍻.`,
      date: new Date(`2022-10-${(i % 28) + 1}`),
      publishedAt: new Date(`2022-10-${(i % 28) + 1}`),
      tags: ["web", "frontend", "guide"],
      summary: `Learn about ${title} in this practical post.`,
      images: [
        "/static/images/banners/brown-wooden-house-on-green-grass-field-near-green-mountains-during-daytime__dangcong__TMa0l7fdSW8.jpeg",
      ],
      authors: ["default"],
      readingTime: {
        minutes: 5,
      },
    };
  });

  for (const post of posts) {
    await db.blog.create({ data: post });
  }

  console.log("✅ 20 blog posts with random titles inserted");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
