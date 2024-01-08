import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Link from "next/link";
import AppContextProvider from "./_store";
import { sleep } from "../lib/utils";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const re = await sleep();
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased overflow-hidden`}>
        <Link href="/re_second">第一个</Link>
        <Link href="/re_third">第二个</Link>
        <AppContextProvider
          init={{
            currentModel: re as string,
          }}
        >
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
