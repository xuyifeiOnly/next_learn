"use client";

import React from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
// 如果您使用的是 Next.js 14，请改用下面的导入。更多信息： https://github.com/ant-design/ant-design/issues/45567
// import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs/lib';
import type Entity from "@ant-design/cssinjs/es/Cache";
import { useServerInsertedHTML } from "next/navigation";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN"; // 设置antd组件用中文
// import theme from "../theme/themeConfig"; // antd相关主题等自定义配置

import "dayjs/locale/zh-cn";

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));
  return (
    <StyleProvider cache={cache}>
      <ConfigProvider locale={zhCN}> {children}</ConfigProvider>
    </StyleProvider>
  );
};

export default StyledComponentsRegistry;
