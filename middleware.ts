import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

export async function middleware(req: NextApiRequest, res: NextApiResponse) {
  const session = await NextAuth(authConfig).auth(req, res);
  // console.log(req.url);

  return session;
}
// export default NextAuth(authConfig).auth;

// export async function middleware(request: NextRequest) {
//   // const response = NextResponse.next();
//   // return response;
//   return NextAuth(authConfig).auth();
//   // return NextResponse.redirect(new URL('/home', request.url))
// }

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.png).*)"],
};

// /：正则表达式通常以斜杠字符开始和结束，用于表示正则表达式的开始和结束。

// ( 和 )：这是捕获组的开始和结束，但在这个表达式中，它们主要用于分组操作。

// (?! ... )：这是一个负向前瞻表达式，用于查找不包含某个模式的文本。

// api|_next/static|_next/image|.png：这是一个竖线 | 分隔的多个子模式。这些子模式表示你要排除的字符串，即不想匹配的字符串。这个表达式的含义是：如果文本中包含 "api"、"_next/static"、"_next/image" 或 ".png" 中的任何一个子字符串，那么就不匹配这部分文本。

// .*：这表示匹配任意字符（.）零次或多次（*）。这是一个通配符，用于匹配任意文本。

// 综合起来，这个正则表达式的含义是：匹配任何文本，但不包含 "api"、"_next/static"、"_next/image" 或 ".png" 中的任何一个子字符串。如果文本中包含这些子字符串中的任何一个，整个表达式将不匹配。这可以用于过滤文本中不希望出现的内容。
