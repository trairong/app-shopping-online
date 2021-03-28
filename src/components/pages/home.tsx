import {
  Button,
  Card,
  Carousel,
  Col,
  Image,
  Input,
  Pagination,
  Rate,
  Row,
  Checkbox,
} from "antd";

import React, { ReactElement, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../../context";
import { Language } from "../../languages";

interface Props {}

export default function Home({}: Props): ReactElement {
  const { state, dispatch } = useContext(Context);
  const [isLoad, setisLoad] = useState(false);
  const [lang, setlang] = useState<any>();

  useEffect(() => {
    setlang(Language(state.language));
    setisLoad(true);
  }, [state.language]);
  useEffect(() => {}, [lang]);
  return (
    <>
      {isLoad && (
        <Contents theme={state.theme}>
          <Carousel autoplay>
            <Row>
              <Image
                preview={false}
                src="./images/carousel3.png"
                style={{
                  // maxWidth: 800,
                  // minHeight: 300,
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  margin: 0,
                }}
              ></Image>
            </Row>
            <Row>
              <Image
                preview={false}
                src="./images/carousel3.png"
                style={{
                  minWidth: 800,
                  minHeight: 300,
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  margin: 0,
                }}
              ></Image>
            </Row>
            <Row>
              <Image
                preview={false}
                src="./images/carousel3.png"
                style={{
                  minWidth: 800,
                  minHeight: 300,
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  margin: 0,
                }}
              ></Image>
            </Row>
          </Carousel>
          <TextHeader theme={state.theme}>
            {lang.RecommendedProducts}
          </TextHeader>
          <Carousel autoplay>
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <div key={index}>
                  <Row>
                    <Col span={4}>
                      <Image src="./images/product1.png" />
                    </Col>
                    <Col span={4}>
                      <Image src="./images/product1.png" />{" "}
                    </Col>
                    <Col span={4}>
                      <Image src="./images/product1.png" />{" "}
                    </Col>
                    <Col span={4}>
                      <Image src="./images/product1.png" />{" "}
                    </Col>
                    <Col span={4}>
                      <Image src="./images/product1.png" />{" "}
                    </Col>
                    <Col span={4}>
                      <Image src="./images/product1.png" />{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Carousel>
          <TextHeader theme={state.theme}>สินค้ายอดนิยม</TextHeader>
          <Row gutter={[10, 10]} style={{ padding: 16 }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
              return (
                <Col span={4} key={index}>
                  <Cards
                  // title={'product'+item}
                  >
                    <Image src="./images/product1.png" />
                    <div style={{ width: "100%", padding: 5 }}>
                      {/* <Buys theme={state.theme}>2500.00</Buys> */}
                      <Rate
                        allowHalf
                        defaultValue={3}
                        style={{ color: state.theme.primary }}
                      />
                    </div>
                  </Cards>
                </Col>
              );
            })}
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Paginations theme={state.theme} defaultCurrent={10} total={50} />
          </Row>
          <TextHeader theme={state.theme}>สินค้าโปรโมชั่น</TextHeader>
          <Row gutter={[16, 16]} style={{ padding: 16 }}>
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <Col span={24} key={index}>
                  <Cards
                    // title="Default size card"
                    // extra={<a href="#">More{item}</a>}
                    style={{ padding: 5, width: "100%" }}
                  >
                    <Row>
                      <ColImages span={12}>
                        <Image
                          src="./images/product1.png"
                          style={{ width: "100%" }}
                        />
                      </ColImages>
                      <Col span={12} style={{ padding: 30 }}>
                        <TitleDetail theme={state.theme}>
                          PRODUCT NAME
                        </TitleDetail>
                        <TextDetail>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Vel harum illum inventore, fugiat blanditiis
                          perspiciatis nisi hic recusandae sit, sapiente ex
                          deserunt, reiciendis nostrum odio minus laborum itaque
                          quam doloremque.
                        </TextDetail>
                        <Row gutter={[16, 20]} style={{ paddingTop: 20 }}>
                          <Col span={24}>
                            <TextPrice theme={state.theme}>฿1200.00</TextPrice>
                          </Col>
                          
                          <Col span={24} style={{ marginTop: 50 }}>
                            <Button type="primary" block>
                              DETAIL PRODUCT
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Cards>
                </Col>
              );
            })}
          </Row>
        </Contents>
      )}
    </>
  );
}
const ColImages = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-image {
    width: 50%;
  }
`;
const Contents = styled.div`
  height: 100%;
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

const Carousels = styled(Carousel)`
  box-shadow: 0px 0px 3px #546e7a;
`;

const Cards = styled(Card)`
  cursor: pointer;
  .ant-card-body {
    padding: 0px;
  }
  border-radius: 0px;

  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5), 0 0 0px rgba(0, 0, 0, 0.1) inset;
`;
const Buys = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 5px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
`;
const TextHeader = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.primary};
  align-items: center;
  padding-left: 16px;
  font-size: 20px;
  font-weight: bold;
  -webkit-box-shadow: 0 35px 20px #777;
  -moz-box-shadow: 0 35px 20px #777;
  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%),
    0 12.5px 10px rgb(0 0 0 / 6%), 0 39.3px 17.9px rgb(0 0 0 / 0%),
    0 41.8px 33.4px rgb(0 0 0 / 0%), 0 100px 80px rgb(0 0 0 / 0%);
`;

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
const TitleDetail = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;
const TextDetail = styled.div`
  font-size: 16px;
  text-indent: 50px;
  border-bottom: 2px solid #666;
  padding-bottom: 50px;
`;
const TextPrice = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: fantasy;
  color: ${({ theme }) => theme.primary};
`;
