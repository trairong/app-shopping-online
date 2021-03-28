import { Card, Col, Image, Pagination, Rate, Row, Tabs } from "antd";
import { Router, useRouter } from "next/router";
import React, { ReactElement, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context";

interface Props {}

export default function Product({}: Props): ReactElement {
  const { state, dispatch } = useContext(Context);
  return (
    <>
      <Tabss defaultActiveKey="1" centered>
        <TabPanes theme={state.theme} tab="เสื้อแขนยาว" key="1">
          <TabDetail />
        </TabPanes>
        <TabPanes theme={state.theme} tab="หมวดเสื้อผ้า" key="2">
          <TabDetail />
        </TabPanes>
        <TabPanes theme={state.theme} tab="หมวดเมียน้อย" key="3">
          <TabDetail />
        </TabPanes>
      </Tabss>
    </>
  );
}

const TabDetail = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Context);

  const routeMenu = (item) => {
    console.log(item);
    dispatch({
      type: "SET_ROUT_MUNU",
      payload: {
        routMenu: item,
      },
    });
  };
  return (
    <>
      <Row gutter={[10, 10]} style={{ padding: 16 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (item, index) => {
            return (
              <Col span={4} key={index}>
                <Cards
                bordered={false}
                  // title={'product'+item}
                  onClick={() => routeMenu("pages/detail-product")}
                >
                  <Image src="./images/product1.png" preview={false} />
                  <div style={{ width: "100%", padding: 5 }}>
                    <h5 style={{ color: "#555" }}>
                      การเกงยีนผู้ชาย เดซี่ปักขาดรูกางเกงยีนเอวสูงเก้าแต้ม
                      มาใหม่
                    </h5>

                    <Buys theme={state.theme}>฿2500.00</Buys>

                    <Rate
                      allowHalf
                      defaultValue={3}
                      style={{ color: state.theme.primary, fontSize: 14 }}
                    />
                  </div>
                </Cards>
              </Col>
            );
          }
        )}
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Paginations theme={state.theme} defaultCurrent={10} total={50} />
      </Row>
      <br />
      <br />
    </>
  );
};
const Paginations = styled(Pagination)`
  .ant-pagination-item-active {
    background-color: ${({ theme }) => theme.primary}!important;
    border-radius: 0 !important;
    font-weight: bold;
  }
  .ant-pagination-item {
    border-radius: 0 !important;
    font-weight: bold;
  }
  .ant-pagination-item-link:after,
  .ant-pagination-jump-prev:after,
  .ant-pagination-jump-next:after {
    background-color: #0585e7 !important;
    border-radius: 0 !important;
    border: 1px solid #e7ebee !important;
  }

  .ant-pagination-item-link:first-child {
    border-radius: 0 !important;
    color: #000;
  }
  .ant-pagination-item-active a {
    color: #fff !important;
  }
`;
const TabPanes = styled(Tabs.TabPane)`
  height: calc(100vh - 143px);
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
const Cards = styled(Card)`
  cursor: pointer;
  .ant-card-body {
    padding: 0px;
  }
    border-radius: 0px;

  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5), 0 0 0px rgba(0, 0, 0, 0.1) inset;
`;
const Tabss = styled(Tabs)`
  background-color: #fff;
  .ant-tabs-nav {
  }
  .ant-tabs-nav-wrap {
    padding: 15px;

    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
  }
`;
const Buys = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
`;
