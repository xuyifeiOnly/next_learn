"use client";
import AcmeLogo from "@/app/ui/acme-logo";
import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import Link from "next/link";
import { upload } from "@vercel/blob/client";
import Image from "next/image";
import { delFile, deleteText, saveImg, saveText } from "./lib/blobUtil";
import { use, useRef, useState } from "react";
import { PutBlobResult } from "@vercel/blob";
import { bufferToBase64 } from "@/lib/action";
export default function Page() {
  const uploadText = () => {
    saveText();
  };
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const delText = () => {
    // deleteText()
    // saveImg();
    delFile();
  };
  const uploadImg = async () => {
    const file = inputFileRef.current!.files![0];
    // console.log(file);
    const response = await fetch(`/api/image?filename=${file.name}`, {
      method: "POST",
      body: file,
    });

    const newBlob = (await response.json()) as PutBlobResult;

    // const reader = new FileReader();
    // reader.onload = async function (event) {
    //   // 将文件内容转换为二进制数据
    //   const binaryData = event.target!.result;
    //   // const result = await bufferToBase64(binaryData as ArrayBuffer);
    //   // console.log(result);
    // };
    // reader.readAsArrayBuffer(file);
    //  saveImg(file)
    console.log(newBlob);
  };
  return (
    <main className="flex min-h-screen flex-col p-6">
      hi
      {/* <button
        onClick={uploadText}
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        存储文件
      </button>
      <button
        onClick={delText}
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        删除文件
      </button>
      <h1>Upload Your Avatar</h1>

      <input name="file" ref={inputFileRef} type="file" required />
      <button
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        onClick={uploadImg}
      >
        Upload
      </button>
      <Image
        alt=""
        width={200}
        height={200}
        src="https://x7tjz5xqqekyn9vr.public.blob.vercel-storage.com/logo-6onSKVLaZtYzfxVlQh2nJp6Y633VzO.png"
      ></Image> */}
    </main>
  );
}
