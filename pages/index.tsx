import React, { useContext, useEffect } from "react";
import CLayout from "../src/components/c-layout";
import CHeader from "../src/components/c-header";
import CSider from "../src/components/c-sider";
import SwitchComponents from "../src/utils/switch-components";
import { Context } from "../src/context";
import CContent from "../src/components/c-content";
import { Breadcrumb } from "antd";
import styled from "styled-components";

export default function Home() {
  const { state } = useContext(Context);

  // useEffect(() => {

  // }, [])
  return (
    <>
      <CLayout>
        <CHeader />
        <CLayout>
          <CSider />
          <CContent>
            {/* <Breadcrumbs>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumbs> */}
            <SwitchComponents route={state.routMenu} />
          </CContent>
        </CLayout>
      </CLayout>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Kanit", sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

const Breadcrumbs = styled(Breadcrumb)`
  padding: 16px;
  -webkit-box-shadow: 0 35px 20px #777;
  -moz-box-shadow: 0 35px 20px #777;

  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%),
    0 12.5px 10px rgb(0 0 0 / 6%), 0 39.3px 17.9px rgb(0 0 0 / 0%),
    0 41.8px 33.4px rgb(0 0 0 / 0%), 0 100px 80px rgb(0 0 0 / 0%);
`;
