export type Project = {
    slug: string;
    title: string;
    image: string;
    summary: string;
    body: string;
  };
  
  export const projects: Project[] = [
    {
      slug: "ecommerce-dashboard",
      title: "E-commerce Dashboard",
      image: "/portfolio/p1.svg",
      summary: "Analytics dashboard for a retail brand.",
      body: "Project details... tech stack, challenges, results."
    },
    {
      slug: "marketing-site",
      title: "Marketing Site",
      image: "/portfolio/p2.svg",
      summary: "High-converting landing pages.",
      body: "Project details..."
    },
    {
      slug: "saas-platform",
      title: "SaaS Platform",
      image: "/portfolio/p3.svg",
      summary: "Multi-tenant web app.",
      body: "Project details..."
    }
  ];
  