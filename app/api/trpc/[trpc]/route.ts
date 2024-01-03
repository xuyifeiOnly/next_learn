import { Context, createContext } from "@/app/lib/context";
import { appRouter } from "@/app/lib/trpc";

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

// 处理请求
const handler = (request: Request, context: any) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext,
  });
};
// 导出为POST和GET方法
// 详情请参考Next官方文档 https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export const GET = handler;
export const POST = handler;
