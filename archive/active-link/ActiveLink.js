// "use client";
// // client component to visually highlight active links
//
// import classes from "@/archive/active-link/ActiveLink.module.css";
// import Link from "next/link";
// import { usePathname as pathname } from "next/navigation";
//
// // using pathname to refer to the active link
// export default function ActiveLink({ href, children }) {
//   const path = pathname();
//   return (
//     <>
//       <Link
//         href={href}
//         className={
//           path.startsWith(href)
//             ? `${classes.active} ${classes.link}`
//             : classes.link
//         }
//       >
//         {children}
//       </Link>
//     </>
//   );
// }
