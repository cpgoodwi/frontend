"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const pageTitles: { [key: string]: string } = {
    "/": "Home",
    "/page2": "Page 2",
  }

  const currentTitle = pageTitles[pathname] || "Page";

  return (
    <nav>
      <h1>{currentTitle}</h1>
      {Object.entries(pageTitles).map(([path, title]) => (
        <li key={path}>
          <Link href={path}>{title}</Link>
        </li>
      ))}
    </nav>
  );
}