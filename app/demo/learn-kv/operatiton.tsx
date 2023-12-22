"use client";
import { delKvParams, deleteText, getKvParams, setKvParams } from "@/app/lib/blobUtil";
import React from "react";
export default function Operation() {
  const setKey = async () => {
    const res = await setKvParams("测试2缓存");
    console.log(res);
  };
  const deleteK = async () => {
    const res = await delKvParams("ceshi2");
  };
  const getKey = async () => {
    const res = await getKvParams("userSession");
    // fetch(
    //   "https://sunny-grizzly-30898.kv.vercel-storage.com/set/ceshi2/ceshi2",
    //   {
    //     headers: {
    //       Authorization:
    //         "Bearer AXiyASQgODk3NTdjMTktZDk0Zi00ZTMzLWIxNjEtMWQ3ZjRmMDI3Y2FjYmMzZDA2YWRiNDZkNDJmZmE4OTM2MzZiNWEyMWU5NDE=",
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  };
  return (
    <div>
      <button
        onClick={setKey}
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        设置key
      </button>
      <button
        onClick={getKey}
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        获取key
      </button>
      <button
        onClick={deleteK}
        className="flex items-center gap-5 self-start rounded-lg bg-red-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        删除key
      </button>
    </div>
  );
}
