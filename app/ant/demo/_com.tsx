"use client";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";

import { createTRPCNext } from "@trpc/next";
import { httpBatchLink } from "@trpc/client";
import { AppRouter } from "@/app/lib/trpc";
import { usePathname, useRouter } from "next/navigation";

/**
 * 这里我们可以看到导入的只有类型，并没有appRouter的实例
 * 我们知道在TS编译为JS时这种类型是不会被编译的
 */

// 创建客户端tRPC实例
export const trpc = createTRPCNext<AppRouter>({
  config(opts: any) {
    return {
      links: [
        // 我们使用http作为传输的载体
        httpBatchLink({
          url: `http://localhost:4006/api/trpc`,
        }),
      ],
    };
  },
});

const Button: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState<number>(0);
  // tRPC/Next中集成了 react-query 帮我们封装好了hooks 方便调用
  const { data, failureReason, refetch, isFetching, isLoading, isError } =
    trpc.getServerMemo.useQuery(`内存为:`);
  const mutation = trpc.hello.useMutation();
  const ceshi = async () => {
    mutation.mutate("ahode");
    // console.log(res);
    // refetch();
    // setQuery(new Date().getTime());
    // revalidatePath(pathname)
    // router.push(pathname+`?time=${new Date().getTime()}`);
  };
  // console.log(mutation);
  // console.log(isLoading);

  return (
    <div>
      {mutation.data as string}
      {mutation.error && <p>Something went wrong! {mutation.error.message}</p>}
      直接通过后台方法获取数据
      <h1> {data}</h1>
      <button onClick={ceshi}> 测试 {query}</button>
      <div>{isError && <h3>{failureReason?.message}</h3>}</div>
    </div>
  );
};
// 通过tRPC提供的HOC对组件进行包裹
export default trpc.withTRPC(Button);
