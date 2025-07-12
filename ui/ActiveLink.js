"use client";
// client component to visually highlight active links

import classes from "@/components/header/Header.module.css";
import Link from "next/link";
import {usePathname as pathname} from "next/navigation";

export default function activeLink({href, children}) {
  const path = pathname();
  return (
    <>
      <Link href={href} className={path.startsWith(href) ? classes.active : undefined}>{children}</Link>
    </>
  )
}