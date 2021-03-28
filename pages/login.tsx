import React, { ReactElement } from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";

interface Props {}

export default function Login({}: Props): ReactElement {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Content>
        <Body>
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ width: "100%" }}
          >
            <Form.Item
              label="USERNAME"
              name="username"
              style={{ fontWeight: "bold" }}
            >
              <Input size="large" style={{ borderRadius: 0 }} />
            </Form.Item>

            <Form.Item
              label="PASSWORD"
              name="password"
              style={{ fontWeight: "bold" }}
            >
              <Input.Password size="large" style={{ borderRadius: 0 }} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%", borderRadius: 0 }}
              >
                LOGIN
              </Button>
            </Form.Item>
          </Form>
        </Body>
      </Content>
    </>
  );
}

const Content = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;
const Body = styled.div`
  border-radius: 5px;
  width: 35%;
  height: 50%;
  padding: 20px;

  background-color: #fff;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;
