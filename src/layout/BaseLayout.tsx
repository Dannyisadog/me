"use client";

import { ConfigProvider, theme } from "antd";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout(props: BaseLayoutProps) {
  const { children } = props;

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
