import { Button, Col, Input, Row } from "antd";
import React, { ReactElement, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../../context";

interface Props {}

export default function PaymentCredit({}: Props): ReactElement {
  const { state, dispatch } = useContext(Context);
  return (
    <>
      {/* <Content> */}
      <Content gutter={16}>
        <Col xs={20} sm={20} md={16} lg={16} xl={8}>
          <Card>
            <Row gutter={[16,16]}>
              <Col span={24}><div style={{fontSize: 30,fontWeight: 'bold',color: state.theme.primary}}>VISA</div></Col>
              <Col span={18}>
                <Input placeholder="CARD NUMBER" />
              </Col>
              <Col span={6}>
                <Input placeholder="CVV" />
              </Col>
              <Col span={6}>
                <Input placeholder="MONTH" />
              </Col>
              <Col span={6}>
                <Input placeholder="YEAR" />
              </Col>
            </Row>
          </Card>
          <div style={{width: '100%',height: '100%',textAlign: 'end',marginTop: 20}}>

          <Button type="primary">ADD CREDIT</Button>
          </div>
        </Col>
      </Content>
      {/* </Content> */}
    </>
  );
}
const Content = styled(Row)`
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5), 0 0 0px rgba(0, 0, 0, 0.1) inset;
`;
