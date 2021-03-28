import React, { ReactElement, useContext } from "react";
import styled from "styled-components";
import { Table, Input, Button, Popconfirm, Form, Row, Col } from "antd";
import { FormInstance } from "antd/lib/form";
import { Context } from "../../context";

interface Props {}
const columns = [
  {
    title: "No.",
    dataIndex: "no",
    // width: 150,
  },
  {
    title: "ชื่อสินค้า",
    dataIndex: "productName",
    // width: 150,
  },
  {
    title: "ราคา",
    dataIndex: "ProductPrice",
  },
  {
    title: "จำนวน",
    dataIndex: "ProductQTY",
  },
  {
    title: "ราคารวม",
    dataIndex: "ProductTotal",
  },
  {
    title: "Action",
    dataIndex: "action",
    align: "center",
    width: 150,
    render: (text: string) => (
      <>
        <Row gutter={16}>
          <Col span={12}>
            <Button type="primary">EDIT</Button>
          </Col>
          <Col span={12}>
            <Button type="primary">DEL</Button>
          </Col>
        </Row>
      </>
    ),
  },
];

export default function ListProduct({}: Props): ReactElement {
  const { state, dispatch } = useContext(Context);

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i + 1,
      no: i + 1,
      productName: "product",
      ProductPrice: "1500.00",
      ProductQTY: 3,
      ProductTotal: "4500.00",

      // Active: ['delete','edit'],
    });
  }

  return (
    <>
      {/* <Scrolls theme={state.theme}> */}
      <Tables
        theme={state.theme}
        dataSource={data}
        columns={columns}
        // scroll={{ y: "calc(100vh - 240px)" }}
      ></Tables>
      {/* </Scrolls> */}
    </>
  );
}
const Tables = styled(Table)`
  padding: 16px;
  /* height: 100%; */
  .ant-table-thead th {
    border-radius: 0px !important;
    color: #fff;
    background: ${({ theme }) => theme.primary}!important;
    border-bottom: solid 0px #cdd8ed !important;
    position: sticky;
    top: 0px;
    z-index: 2;
  }

  .ant-pagination-item-active a {
    color: #fff !important;
  }

  .ant-table-tbody > tr > td {
    border-bottom: solid 1px ${({ theme }) => theme.primary} !important;
    border-radius: 0px !important;
  }

  .ant-table-tbody > tr:hover > td {
    background: ${({ theme }) => theme.primary} !important;
    color: #fff;
    border-top: solid 1px ${({ theme }) => theme.toolbar} !important;
    border-bottom: solid 1px ${({ theme }) => theme.toolbar} !important;
  }
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
  .ant-table-content {
    height: calc(100vh - 160px);
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
      background-color: ${({ theme }) => theme.primary}!important;
    }
  }
  -webkit-box-shadow: 0 35px 20px #777;
  -moz-box-shadow: 0 35px 20px #777;

  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%),
    0 12.5px 10px rgb(0 0 0 / 6%), 0 39.3px 17.9px rgb(0 0 0 / 0%),
    0 41.8px 33.4px rgb(0 0 0 / 0%), 0 100px 80px rgb(0 0 0 / 0%);
`;

const Scrolls = styled.div`
  height: calc(100vh - 143px);
  padding: 10px;
  margin-top: -10px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    box-shadow: 0px 0px 5px #000000;
    background-color: #ececec;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primary};
  }
`;
