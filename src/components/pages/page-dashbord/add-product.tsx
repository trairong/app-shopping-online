import { Col, Row, Form, Input, Button, Upload, Select } from "antd";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UploadOutlined } from "@ant-design/icons";
import { Context } from "../../../context";

interface Props {}

export default function AddProduct({}: Props): ReactElement {
  const [form] = Form.useForm();
  const { state, dispatch } = useContext(Context);
  const [loadding, setloadding] = useState(false);
  const [isError, setisError] = useState(false);
  const [mesError, setmesError] = useState("");
  useEffect(() => {
    form.setFieldsValue({
      p_name: "",
      p_type: "",
      p_color: "",
      p_size: "",
      p_price: "",
      p_qty: "",
      p_detail: "",
    });
  }, []);

  const list_colors = [
    { label: "ดำ", value: "black" },
    { label: "แดง", value: "red" },
    { label: "เหลือง", value: "yellow" },
    { label: "น้ำเงิน", value: "blue" },
    { label: "เทา", value: "gray" },
    { label: "เขียว", value: "green" },
  ];
  const list_size = [
    { label: "S", value: "S" },
    { label: "M", value: "M" },
    { label: "L", value: "L" },
    { label: "XL", value: "XL" },
    { label: "XXL", value: "XXL" },
  ];
  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };
  const sumit_addAroduct = (values: any) => {
    setloadding(true);
    console.log("=====values add product ==========", values);
  };
  return (
    <>
      <Content>
        <Form
          form={form}
          layout="vertical"
          onFinish={sumit_addAroduct}
          style={{ width: "100%", padding: 16 }}
        >
          <Card>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item label="ชื่อสินค้า" name="p_name">
                  <Input
                    placeholder="input placeholder"
                    style={{ borderRadius: 0 }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item label="ประเภทสินค้า" name="p_type">
                  <Input
                    placeholder="input placeholder"
                    style={{ borderRadius: 0 }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6}>
                <Form.Item
                  name="p_color"
                  label="สี"
                  rules={[{ required: true, message: "กรุณาเลือกสี" }]}
                >
                  <Select options={list_colors} onChange={handleChange} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6}>
                <Form.Item
                  name="p_size"
                  label="ไซส์"
                  rules={[{ required: true, message: "กรุณาเลือกไซส์" }]}
                >
                  <Select options={list_size} onChange={handleChange} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6}>
                <Form.Item label="ราคา" name="p_price">
                  <Input
                    placeholder="input placeholder"
                    style={{ borderRadius: 0 }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6}>
                <Form.Item label="จำนวน" name="p_qty">
                  <Input
                    placeholder="input placeholder"
                    style={{ borderRadius: 0 }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24}>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture"
                  className="upload-list-inline"
                >
                  <Button icon={<UploadOutlined />}>อัพโหลดรูป</Button>
                </Upload>
              </Col>

              <Form.Item style={{ position: "absolute", bottom: 1, right: 20 }}>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ width: 100, borderRadius: 0 }}
                  loading={loadding}
                >
                  บันทึก
                </Button>
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
  border-radius: 0px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5), 0 0 0px rgba(0, 0, 0, 0.1) inset;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
