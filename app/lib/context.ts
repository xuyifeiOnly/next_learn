import { initTRPC } from "@trpc/server";
import { FetchHandlerRequestOptions } from "@trpc/server/adapters/fetch";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
export const createContext = async (opts: any) => {
  //   const session = await getSession({ req: opts.req });
  //   console.log(13131313);
  //   console.log(opts.req.url);
  return {
    session: "测试session",
  };
};
export type Context = Awaited<ReturnType<typeof createContext>>;
// const t1 = initTRPC.context<typeof createContext>().create();
// t1.procedure.use(({ ctx }) => { ... });
//
// type Context = Awaited<ReturnType<typeof createContext>>;
// const t2 = initTRPC.context<Context>().create();
// t2.procedure.use(({ ctx }) => { ... });
