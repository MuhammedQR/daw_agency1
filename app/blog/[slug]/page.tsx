import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "@/content/blog/posts";
import BlogCard from "@/components/BlogCard";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <>
      <article className="pt-28 pb-20">
        <div className="container-app max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[hsl(var(--content))]">
            {post.title}
          </h1>
          <p className="text-sm text-[hsl(var(--muted))] mt-2">
            {new Date(post.date).toLocaleDateString()}
          </p>

          <div className="relative mt-6 aspect-[4/1] card overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none mt-8">
            <p>{post.body}</p>
          </div>
        </div>
      </article>
      <section className="py-16">
        <div className="container-app">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard
              title="Design systems with Tailwind"
              image="/blog/b1.svg"
              href="/blog"
            />
            <BlogCard
              title="Accessibility quick wins"
              image="/blog/b2.svg"
              href="/blog"
            />
            <BlogCard
              title="Next.js performance tips"
              image="/blog/b3.svg"
              href="/blog"
            />
          </div>
        </div>
      </section>
    </>
  );
}
