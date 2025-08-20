import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/content/blog/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | NexGen Solutions",
  description:
    "Read the latest articles on web development, app design, digital marketing, and tech trends from NexGen Solutions.",
  openGraph: {
    title: "NexGen Solutions Blog",
    description:
      "Stay updated with the latest insights on web development, app design, and tech trends.",
    url: "https://nexgen-solutions.com/blog",
    images: ["/og-blog.png"]
  }
};

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-app">
        <SectionTitle title="Blog" description="Articles and insights from our team." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <BlogCard key={p.slug} title={p.title} image={p.image} href={`/blog/${p.slug}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
