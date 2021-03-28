import { Layout } from 'antd';
import React, { ReactElement } from 'react';
import styled from "styled-components";

interface Props {
    children: React.ReactNode;
}

export default function CContent({children}: Props): ReactElement {
    return (
        <>
        <Contents>
          <div style={{ flex: 1, width: "100%",overflow: 'hidden'}}>{children}</div>
          {/* <BHFooter /> */}
        </Contents>
      </>
    );
  }
  const Contents = styled(Layout.Content)`
    /* background-color: #999; */
    display: flex;
    flex-direction: column;
  `;
  
