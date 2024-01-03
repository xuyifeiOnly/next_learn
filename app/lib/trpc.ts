import { TRPCError, initTRPC } from "@trpc/server";
import os from "os";
import { unstable_noStore as noStore } from "next/cache";
import { Context } from "./context";
// https://trpc.io/docs/server/procedures
// 使用方式参考
// https://codesandbox.io/p/devbox/github/trpc/trpc/tree/main/examples/next-minimal-starter?file=%2Fsrc%2Fpages%2Fapi%2Ftrpc%2F%5Btrpc%5D.ts%3A10%2C13-10%2C28
const { procedure, router } = initTRPC.context<Context>().create();
// 初始化tRPC
// const { procedure, router } = initTRPC.create();

// 创建路由
export const appRouter = router({
  hello: procedure
    .input((str) => {
      return str;
    })
    .mutation(async (opts) => {
      // console.log(opts.input);
      return opts.input;
    }),
  // 定义一个路由/过程
  getServerMemo: procedure
    // 可以在这里对输入进行效验，返回值类型就是客户端调用的入参类型
    .input((value: unknown): string => {
      if (typeof value === "string" && value.includes("内存")) {
        // 返回类型为string
        return value;
      } else {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "输入内容包含 [内存] 的字符串！",
        });
      }
    })
    .query(async (opt) => {
      // console.log(opt.ctx.session);
      // if (!opt.ctx.user) {
      //   throw new TRPCError({ code: "UNAUTHORIZED" });
      // }
      // noStore()
      // 这里的opt.input的类型被自动推断为string
      let time = new Date().getTime();
      // console.log(time);
      return `${opt.input}${os.totalmem()}+ ${time}`;
    }),
});

// 导出类型给客户端使用
export type AppRouter = typeof appRouter;
