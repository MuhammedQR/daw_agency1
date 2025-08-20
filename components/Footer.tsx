import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="container-app py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} NexGen Solutions. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-brand-primary">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
