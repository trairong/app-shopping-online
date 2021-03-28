import React, { ReactElement, useContext } from "react";
import { Context } from "../../context";
import styled from "styled-components";
import { Button, Col, Row } from "antd";
import { _setStorage } from "../../utils/local-storage";
import { KEY_STORAGE } from "../../constants";
import { GlobalOutlined } from "@ant-design/icons";

interface Props {}

const primarys = [
  { colorName: "#7f0000" },
  { colorName: "#b71c1c" },
  { colorName: "#880e4f" },
  { colorName: "#560027" },
  { colorName: "#311b92" },
  { colorName: "#1a237e" },
  { colorName: "#0d47a1" },
  { colorName: "#002f6c" },
  { colorName: "#263238" },
  { colorName: "#004d40" },
  { colorName: "#00363a" },
  { colorName: "#006064" },
  { colorName: "#4a148c" },
  { colorName: "#38006b" },
  { colorName: "#212121" },
  { colorName: "#003300" },
  { colorName: "#003d00" },
  { colorName: "#524c00" },
  { colorName: "#1c313a" },
  { colorName: "#29434e" },
];

export default function Setting({}: Props): ReactElement {
  const { state, dispatch } = useContext(Context);
  const setTheme = (color) => {
    _setStorage(KEY_STORAGE.THEME, JSON.stringify(color));
    console.log("Theme => ", color);

    dispatch({
      type: "SET_PRIMARY",
      payload: {
        primary: color,
      },
    });
  };
  const setLanguage = (lang) => {
    _setStorage(KEY_STORAGE.LANG, JSON.stringify(lang));

    dispatch({
      type: "SET_LANGUAGE",
      payload: {
        language: lang,
      },
    });
  };
  return (
    <>
      <TextHeader theme={state.theme}>SETTING PRIMARY</TextHeader>
      <Row gutter={[16, 16]} style={{ padding: 10 }}>
        {primarys.map((row, index) => {
          return (
            <Col key={index} span={3}>
              <Button
                type="primary"
                style={{
                  width: "100%",
                  backgroundColor: row.colorName,
                  borderColor: row.colorName,
                }}
                onClick={() => setTheme(row.colorName)}
              >
                {row.colorName}
              </Button>
            </Col>
          );
        })}
      </Row>
      <TextHeader theme={state.theme}>SETTING LANGUAGE</TextHeader>
      <Row gutter={[16, 16]} style={{ padding: 10 }}>
        <Col span={3}>
          <Button
            type="primary"
            style={{ width: "100%" }}
            onClick={() => setLanguage("EN")}
          >
            <GlobalOutlined
              style={{ fontSize: 20}}
            />
            ENGLISH
          </Button>
        </Col>
        <Col span={3}>
          <Button
            type="primary"
            style={{ width: "100%" }}
            onClick={() => setLanguage("TH")}
          >
            <GlobalOutlined
              style={{ fontSize: 20}}
            />
            THAI
          </Button>
        </Col>
      </Row>
    </>
  );
}

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
