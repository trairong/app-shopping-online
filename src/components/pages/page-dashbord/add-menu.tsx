import { Col, Row, Form, Input, Button } from "antd";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {}

export default function AddMenu({}: Props): ReactElement {
  const [form] = Form.useForm();
  return (
    <>
      <Content>
        <Form
          form={form}
          layout="vertical"
          style={{ width: "100%", padding: 16 }}
        >
          <Card>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item label="ชื่อหมวดสินค้า ไทย">
                  <Input
                    placeholder="input placeholder"
                    style={{ borderRadius: 0 }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item label="ชื่อหมวดสินค้า อังกฤษ">
                  <Input
                    placeholder="input placeholder"
                    style={{ borderRadius: 0 }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6}>
                <Form.Item label="ไอคอน">
                  <Input
                    placeholder="input placeholder"
                    style={{ borderRadius: 0 }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6}>
                <Form.Item label="ชื่อหมวดสินค้า">
                  <Input
                    placeholder="input placeholder"
                    style={{ borderRadius: 0 }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6}>
                <Form.Item label="ชื่อหมวดสินค้า">
                  <Input
                    placeholder="input placeholder"
                    style={{ borderRadius: 0 }}
                  />
                </Form.Item>
              </Col>

              <Form.Item style={{ position: "absolute", bottom: 1, right: 20 }}>
                <Button type="primary" style={{width: 100,borderRadius: 0}}>บันทึก</Button>
              </Form.Item>
            </Row>
          </Card>
        </Form>
      </Content>
    </>
  );
}

const Card = styled.div`
  width: 100%;
  padding: 20px;
  height: calc(100vh - 200px);
  background-color: #fff;
  border-radius: 5px;
  -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
    -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
    box-shadow:0 0 20px rgba(0,0,0,0.2);
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
