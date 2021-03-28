import {
  Button,
  Card,
  Col,
  Image,
  Input,
  Row,
  Tabs,
  Checkbox,
  Radio,
} from "antd";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../../context";

interface Props {}

export default function DetailProduct({}: Props): ReactElement {
  const { state, dispatch } = useContext(Context);
  const [value, setValue] = React.useState(1);
  const [qty, setqty] = useState(0);
  const [total, settotal] = useState(120);
  const price= 120;

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const addQty = (item) => {
    setqty((v) => v + item);
  };
  const removeQty = (item) => {
    setqty((v) => v - item);
  };

  const inputQTY = ()=>{

  }

  useEffect(() => {
    settotal(price * qty);
  }, [qty]);
  useEffect(() => {
    console.log('total....',total);
  }, [total]);

  return (
    <>
      <Content theme={state.theme}>
        <Cards>
          <Row>
            <Col span={12} style={{ padding: 30 }}>
              <Image src="./images/product1.png" preview={false} />

              <Radio.Group
                onChange={onChange}
                value={value}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Radio value={1}></Radio>
                <Radio value={2}></Radio>
                <Radio value={3}></Radio>
                <Radio value={4}></Radio>
              </Radio.Group>
            </Col>
            <Col span={12} style={{ padding: 30 }}>
              <TitleDetail theme={state.theme}>PRODUCT NAME</TitleDetail>
              <TextDetail>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                harum illum inventore, fugiat blanditiis perspiciatis nisi hic
                recusandae sit, sapiente ex deserunt, reiciendis nostrum odio
                minus laborum itaque quam doloremque.
              </TextDetail>
              <Row gutter={[16, 20]} style={{ paddingTop: 20 }}>
                <Col span={24}>
                  <TitleDetail theme={state.theme}>สี</TitleDetail>
                  <Checkbox.Group style={{ width: "100%" }}>
                    <Row>
                      <Checkbox value="A">ดำ</Checkbox>
                      <Checkbox value="B">แดง</Checkbox>
                      <Checkbox value="C">เหลือง</Checkbox>
                      <Checkbox value="D">น้ำเงิน</Checkbox>
                      <Checkbox value="E">เทา</Checkbox>
                    </Row>
                  </Checkbox.Group>
                </Col>
                <Col span={24}>
                  <TitleDetail theme={state.theme}>ไซส์</TitleDetail>
                  <Checkbox.Group style={{ width: "100%" }}>
                    <Row>
                      <Checkbox value="A">S</Checkbox>
                      <Checkbox value="B">M</Checkbox>
                      <Checkbox value="C">L</Checkbox>
                      <Checkbox value="D">XL</Checkbox>
                      <Checkbox value="E">XXl</Checkbox>
                    </Row>
                  </Checkbox.Group>
                </Col>
                <Col span={12}>
                  <TextPrice theme={state.theme}>฿{total}</TextPrice>
                </Col>
                <Col span={12} style={{ textAlign: "end" }}>
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={() => removeQty(1)}
                  >
                    -
                  </Button>
                  <Input
                    placeholder="0"
                    bordered={false}
                    value={qty}
                    onChange={()=> inputQTY()}
                    style={{ width: 60, textAlign: "center" }}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={() => addQty(1)}
                  >
                    +
                  </Button>
                </Col>
                <Col span={24} style={{ marginTop: 50 }}>
                  <Button type="primary" block>
                    ADD PRODUCT
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Cards>
        <Row style={{ marginTop: 10 }}>
          <Tabss defaultActiveKey="1" centered>
            <TabPanes theme={state.theme} tab="รายละเอียดสินค้า" key="1">
              <div>sdfads</div>
            </TabPanes>
            <TabPanes
              theme={state.theme}
              tab="โปรโมชั่นสินค้า"
              key="2"
            ></TabPanes>
            <TabPanes theme={state.theme} tab="รีวิวสินค้า" key="3"></TabPanes>
          </Tabss>
        </Row>
      </Content>
    </>
  );
}

const Content = styled.div`
  padding: 16px;
  height: calc(100vh - 80px);
  width: 100%;
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
  /* background-color: #555; */
`;

const Cards = styled(Card)`
  .ant-card-body {
    padding: 0px;
  }
  box-shadow: 0px 6px 20px -10px #777;
`;

const TabPanes = styled(Tabs.TabPane)`
  height: calc(100vh - 165px);
  padding: 0px 16px;
  overflow-y: auto;
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
  width: 100%;
  .ant-tabs-nav {
    background-color: #fff;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
  }
  .ant-tabs-nav-wrap {
    padding: 16px;
    position: relative;
    box-shadow: 0px 6px 20px -10px #777;
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
