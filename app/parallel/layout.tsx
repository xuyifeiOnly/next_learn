import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Link from "next/link";
export default function RootLayout({
  children,
  // team,
  // analytic,
  auth,
}: {
  children: React.ReactNode;
  // analytic: React.ReactNode;
  // team: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased overflow-hidden`}>
        {children}
        {/* {team}
        {analytic} */}
        {/* 登录 */}
        <nav>
          <Link href="/parallel/login">Open modal</Link>
        </nav>
        <div>{auth}</div>
      </body>
    </html>
  );
}
