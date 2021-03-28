import { Button, Col, Form, Image, Input, Row } from "antd";
import { useRouter } from "next/router";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { HOST } from "../src/constants";
import { Context } from "../src/context";
import AlertError from "../src/utils/alert-error";
import { _post } from "../src/utils/axios";

interface Props {}

export default function Register({}: Props): ReactElement {
  const router = useRouter();
  const { state, dispatch } = useContext(Context);
  const [loadding, setloadding] = useState(false);
  const [isError, setisError] = useState(false);
  const [mesError, setmesError] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    });
  }, []);
  const onFinish = (values: any) => {
    setloadding(true);

    const req_register = {
      username: values.username,
      password: values.password,
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      phone: values.phone,
    };

    const URL = `${HOST.URL}${HOST.API.AUTH.POST_REGISTER}`;

    try {
      _post(URL, req_register).then((res) => {
        console.log("======res register ======", res);
        if (res.result) {
          setloadding(false);
          router.push("/");
        } else {
          console.log("error res");
          setloadding(false);
          setisError(true);
          setmesError(res.statusMessage);
        }
      });
    } catch (err) {}
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Content theme={state.theme}>
        <Body xs={20} sm={20} md={16} lg={16} xl={8}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ width: "100%" }}
          >
            {/* <div style={{display:'flex',justifyContent: 'center',marginBottom: 20}}>
              <Image width={100} preview={false} src="images/person1.png" style={{borderRadius: "100%",padding: 0}} />
            </div> */}
            <Form.Item
              label="USERNAME"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              style={{ fontWeight: "bold" }}
            >
              <Input size="large" style={{ borderRadius: 0 }} />
            </Form.Item>

            <Form.Item
              label="PASSWORD"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              style={{ fontWeight: "bold" }}
            >
              <Input.Password size="large" style={{ borderRadius: 0 }} />
            </Form.Item>
            <Form.Item
              label="FIRST NAME"
              name="first_name"
              style={{ fontWeight: "bold" }}
            >
              <Input size="large" style={{ borderRadius: 0 }} />
            </Form.Item>
            <Form.Item
              label="LAST NAME"
              name="last_name"
              style={{ fontWeight: "bold" }}
            >
              <Input size="large" style={{ borderRadius: 0 }} />
            </Form.Item>
            <Form.Item
              label="EMAIL"
              name="email"
              style={{ fontWeight: "bold" }}
            >
              <Input size="large" style={{ borderRadius: 0 }} />
            </Form.Item>
            <Form.Item
              label="PHONE"
              name="phone"
              style={{ fontWeight: "bold" }}
            >
              <Input size="large" style={{ borderRadius: 0 }} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loadding}
                style={{ width: "100%", borderRadius: 0 }}
              >
                REGISTER
              </Button>
            </Form.Item>
          </Form>
        </Body>
      </Content>
      <AlertError
        isError={isError}
        setisError={setisError}
        data={mesError}
        url=""
      />
    </>
  );
}

const Content = styled(Row)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
`;
const Body = styled(Col)`
  border-radius: 5px;

  padding: 20px;

  background-color: #fff;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
