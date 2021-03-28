import { Layout } from "antd";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

export default function CLayout({ children }: Props): ReactElement {
  return (
    <>
      <Layouts style={{ height: "100vh" }}>{children}</Layouts>
    </>
  );
}

const Layouts = styled(Layout)`
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
`;
