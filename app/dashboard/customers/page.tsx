"use client";
import Image from "next/image";
import { useState } from "react";
export default function Page() {
  const [imageError, setImageError] = useState(false);
  const errorUrl =
    "http://47.109.56.148:8080/profile/tmp/upload/13013e9b4e42c3ed3a6ed314a9fab7e_d9cbff184bb543f19fc8859b71f24120.png";
  return (
    <div>
      {imageError ? (
        <Image alt="" width={200} height={200} src={errorUrl}></Image>
      ) : (
        <Image
          alt=""
          width={200}
          height={200}
          onError={() => {
            // 图像加载失败时触发的处理函数
            setImageError(true);
          }}
          src="http://47.109.56.148:8080/profile/tmp/upload/JOT-10475%E7%B4%AB%3E8%8F%80%E9%85%AE10376-48-4_0573aa01721b4c8eae7dd68083454da8.jpg"
        ></Image>
      )}
    </div>
  );
}
