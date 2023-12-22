"use server";
import { put, del } from "@vercel/blob";
import { unstable_noStore as noStore } from 'next/cache';
import { createClient, kv } from "@vercel/kv";
export const saveText = async () => {
  const { url } = await put(
    "articles/blob.json",
    JSON.stringify({
      a: "fadaas",
    }),
    {
      access: "public",
    }
  );
  console.log(url);
};

export const delFile = async () => {
  await del(
    [
      "https://x7tjz5xqqekyn9vr.public.blob.vercel-storage.com/articles/blob-GKajUluZU2rNrxqYWqAsZYjO47LyxS.txt",
    ],
    {}
  );
};
export const saveImg = async () => {
  // console.log(file);
  const { url } = await put("articles/blob.txt", "Hello World!", {
    access: "public",
  });
  console.log(url);
  // const { url } = await put("images/01.jpg",file, {
  //   access: "public",
  // });
  // console.log(url);
};
export const deleteText = async () => {
  const { url } = await put("articles/blob.txt", "Hello World!", {
    access: "public",
  });
  console.log(url);
};

export const setKvParams = async (val: string) => {
  return await kv.set("ceshi2", val,{
    ex: 100 // 这个过期时间是秒计算
  });
  // await kv.hset('userSession', { userId: 1233131, email: 'ex@example.com' });
};

export const delKvParams = async (val: string) => {
  noStore()
  return await kv.del(val);
};

export const getKvParams = async (val: string) => {
  // const res = await kv.get(val);
  const users = createClient({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
  });
  noStore() // 不需要获取缓存的数据
  // const user = await users.get(val);
  const user = await users.hget(val, "userId");
  console.log(user);
};



