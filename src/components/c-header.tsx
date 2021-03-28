import { Col, Row, Layout, Input, Button, Image, Dropdown, Menu } from "antd";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import {useRouter} from "next/router"
import styled from "styled-components";
import { AudioOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Context } from "../context";
import AccountIcon from "@2fd/ant-design-icons/lib/Account";
import AccountCircle from "@2fd/ant-design-icons/lib/AccountCircle";
import Cart from "@2fd/ant-design-icons/lib/Cart";
import ViewGrid from "@2fd/ant-design-icons/lib/ViewGrid";
import BellOutline from "@2fd/ant-design-icons/lib/BellOutline";
import { Language } from "../languages";

const { Header, Footer, Sider, Content } = Layout;

interface Props {}

export default function CHeader({}: Props): ReactElement {
  const router = useRouter();
  const { state } = useContext(Context);
  const [lang, setlang] = useState<any>(null);
  const [isLoad, setisLoad] = useState(false);

  useEffect(() => {
    setlang(Language(state.language));
    setisLoad(true);
  }, [state.language]);

  useEffect(() => {}, [lang]);

  const menu = (
    <Menu style={{ width: 200 }}>
      <Menu.Item key="1" icon={<UserOutlined style={{ fontSize: 20 }} />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<AccountIcon style={{ fontSize: 20 }} />} onClick={()=>router.push('login') }>
        login
      </Menu.Item>
      <Menu.Item key="3" icon={<AccountIcon style={{ fontSize: 20 }} />} onClick={()=>router.push('register') }>
        register
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {isLoad && (
        <Headers theme={state.theme}>
          <Row
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <Col md={6} style={{ display: "flex", height: "100%" }}>
              <Images src="/images/shopping_1.png" preview={false} />
            </Col>
            <Col md={12} style={{ display: "flex", alignItems: "center" }}>
              <Input
                placeholder="INPUT SEARCH"
                style={{ borderRadius: 0, boxShadow: "0px 0px 2px #000000" }}
              />
              <Button
                type="primary"
                style={{ borderRadius: 0, boxShadow: "0px 0px 2px #000000" }}
                icon={<SearchOutlined />}
              >
                {lang.Search}
              </Button>
            </Col>
            <Col md={6} style={{ textAlign: "end" }}>
              <Button
                type="primary"
                shape="circle"
                icon={<BellOutline style={{ fontSize: 30 }} />}
                style={{ width: 50, height: 50 }}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<Cart style={{ fontSize: 30 }} />}
                style={{ width: 50, height: 50 }}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<ViewGrid style={{ fontSize: 30 }} />}
                style={{ width: 50, height: 50 }}
              />
              <Dropdown overlay={menu} placement="bottomLeft">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<AccountCircle style={{ fontSize: 30 }} />}
                  style={{ width: 50, height: 50 }}
                />
              </Dropdown>
            </Col>
          </Row>
        </Headers>
      )}
    </>
  );
}

const Headers = styled(Header)`
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0px 0px 5px #000000;
  padding: 0px;
  height: 80px;
  /* display: flex; */
  position: sticky;
  top: 0px;
  z-index: 3;
  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%),
    0 12.5px 10px rgb(0 0 0 / 6%), 0 39.3px 17.9px rgb(0 0 0 / 0%),
    0 41.8px 33.4px rgb(0 0 0 / 0%), 0 100px 80px rgb(0 0 0 / 0%);
`;

const Images = styled(Image)`
  height: 100%;
  width: 100px;
  padding-left: 0px;
`;
