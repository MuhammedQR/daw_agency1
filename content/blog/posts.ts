export type Post = {
    slug: string;
    title: string;
    image: string;
    excerpt: string;
    body: string;
    date: string;
  };
  
  export const posts: Post[] = [
    {
      slug: "design-systems-with-tailwind",
      title: "Design systems with Tailwind",
      image: "/blog/b1.svg",
      excerpt: "How to structure scalable UI with Tailwind.",
      body: "Full article body here... You can replace this with MDX later.",
      date: "2025-08-01"
    },
    {
      slug: "accessibility-quick-wins",
      title: "Accessibility quick wins",
      image: "/blog/b2.svg",
      excerpt: "Practical a11y tips for modern sites.",
      body: "Full article body here...",
      date: "2025-08-05"
    },
    {
      slug: "nextjs-performance-tips",
      title: "Next.js performance tips",
      image: "/blog/b3.svg",
      excerpt: "Improve Core Web Vitals with simple steps.",
      body: "Full article body here...",
      date: "2025-08-10"
    }
  ];
  