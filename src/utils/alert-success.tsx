import { Button, Modal, Row } from "antd";
import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Context } from "../context";
import styled from "styled-components";
import { CheckCircleOutlined } from "@ant-design/icons";
import { _getStorage, _setStorage } from "./local-storage";

interface PropsSuccess {
  isSuccess: boolean;
  setisSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  data?: any;
  url?: any;
}

const AlertSuccess = ({ isSuccess, setisSuccess, data, url }: PropsSuccess) => {
  const router = useRouter();
  const { state, dispatch } = useContext(Context);
  React.useEffect(() => {}, [data, url, isSuccess, setisSuccess]);

  const checkRouter = () => {
    setisSuccess(false);
  };

  return (
    <>
      <Modals
        centered
        footer={
          <>
            <Button
              key="submit"
              type="primary"
              style={{ width: 100 }}
              onClick={() => checkRouter()}
            >
              OK
            </Button>
          </>
        }
        width={300}
        onCancel={() => setisSuccess(false)}
        visible={isSuccess}
      >
        <div style={{ width: "100%", textAlign: "center" }}>
          <div>
            <CheckCircleOutlined
              style={{ color: state.theme.primary, fontSize: 30 }}
            />
          </div>
          <div style={{ paddingTop: 10 }}>{data}</div>
        </div>
      </Modals>
    </>
  );
};
export default AlertSuccess;

const Modals = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  .ant-modal-content {
    border-radius: 0px;
    text-align: center;
    padding: 10px;
  }
  .ant-modal-header {
    background-color: ${({ theme }) => theme.secondary};
    color: #fff;
  }
  .ant-modal-body {
    padding: 10px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-modal-footer {
    text-align: center;
    border: none;
  }
  .ant-modal-close-x {
    color: #fff;
    font-size: 27px;
  }
`;
