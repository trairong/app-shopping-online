import React, { ReactElement, useContext } from "react";
import { Context } from "../../context";
import styled from "styled-components";
import { Tabs } from "antd";
import AddMenu from "./page-dashbord/add-menu";
import AddProduct from "./page-dashbord/add-product";

const TAB_DASHBORD = [
  { key: "1", name_tab: "เพิ่มหมวดเมนู" },
  { key: "2", name_tab: "เพิ่มสินค้า" },
  { key: "3", name_tab: "ลบสินค้า" },
  { key: "4", name_tab: "แก้ไขสินค้า" },
  { key: "5", name_tab: "สินค้าทั้งหมด" },
];

interface Props {}

export default function Dashbord({}: Props): ReactElement {
  const { state, dispatch } = useContext(Context);
  return (
    <>
      <Tabss defaultActiveKey="1" centered>
        <TabPanes theme={state.theme} tab="เพิ่มหมวดเมนู" key="1">
          <AddMenu />
        </TabPanes>
        <TabPanes theme={state.theme} tab="เพิ่มสินค้า" key="2">
          <AddProduct />
        </TabPanes>
        <TabPanes theme={state.theme} tab="ลบสินค้า" key="3">
          ลบสินค้า
        </TabPanes>
        <TabPanes theme={state.theme} tab="แก้ไขสินค้า" key="4">
          แก้ไขสินค้า
        </TabPanes>
        <TabPanes theme={state.theme} tab="สินค้าทั้งหมด" key="5">
          สินค้าทั้งหมด
        </TabPanes>
      </Tabss>
    </>
  );
}

const TabPanes = styled(Tabs.TabPane)`
  height: calc(100vh - 143px);
  /* padding: 10px; */
  margin-top: -10px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    border-radius: 0px;
    box-shadow: 0px 0px 5px #000000;
    background-color: #ececec;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background-color: ${({ theme }) => theme.primary};
  }
`;

const Tabss = styled(Tabs)`
  background-color: #fff;

  .ant-tabs-nav {
    /* padding: 20px; */
  }
  .ant-tabs-nav-wrap {
    padding: 15px;
    /* box-shadow: 0px 0px 5px #000000; */

    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
    /* box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%),
      0 12.5px 10px rgb(0 0 0 / 6%), 0 39.3px 17.9px rgb(0 0 0 / 0%),
      0 41.8px 33.4px rgb(0 0 0 / 0%), 0 100px 80px rgb(0 0 0 / 0%); */
  }
`;
