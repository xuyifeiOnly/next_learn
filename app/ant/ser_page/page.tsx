import React from "react";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
let detail = {
  id: "",
};

// export const metadata: Metadata = {
//   title: detail.id,
//   description: detail.id,
// };
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;
  // console.log(1);
  //   console.log((await parent).classification);
  return {
    title: detail.id,
    description: detail.id,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}
export default async function ServerPage({ params, searchParams }: Props) {
  detail.id = "3131331";
  console.log(2);
  return (
    <>
      {/* <title>测试标题</title>
  <meta name='description' content='测试描述' />
  <meta name='keywords' content='测试描述 发哈收到' /> */}
      <div>组件</div>
    </>
  );
}
