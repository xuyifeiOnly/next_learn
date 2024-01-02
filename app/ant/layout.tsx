import React from "react";

import StyledComponentsRegistry from "@/app/lib/AntdRegistry";
import { App } from "antd";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: '...',
    description: '...',
  }
const RootLayout = async ({ children }: React.PropsWithChildren) => (
  <main>
    <StyledComponentsRegistry>
      <App>{children}</App>
    </StyledComponentsRegistry>
  </main>
);

export default RootLayout;
