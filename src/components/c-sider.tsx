import React, { ReactElement, useContext, useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { Content, Footer } from "antd/lib/layout/layout";
import SubMenu from "antd/lib/menu/SubMenu";
import { Context } from "../context";
import { ROUTE_MENU as MENU } from "../constants/index";
import Home from "@2fd/ant-design-icons/lib/Home";
import HistoryIcon from "@2fd/ant-design-icons/lib/History";
import FormatListBulletedSquareIcon from "@2fd/ant-design-icons/lib/FormatListBulletedSquare";
import CogOutlineIcon from "@2fd/ant-design-icons/lib/CogOutline";
import TruckDeliveryOutlineIcon from "@2fd/ant-design-icons/lib/TruckDeliveryOutline";
import ShoppingIcon from "@2fd/ant-design-icons/lib/Shopping";
import TshirtVIcon from "@2fd/ant-design-icons/lib/TshirtV";
import ShoeSneakerIcon from "@2fd/ant-design-icons/lib/ShoeSneaker";
import SpeakerIcon from "@2fd/ant-design-icons/lib/Speaker";
import GuitarElectricIcon from "@2fd/ant-design-icons/lib/GuitarElectric";
import HeadphonesIcon from "@2fd/ant-design-icons/lib/Headphones";
import PhonesIcon from "@2fd/ant-design-icons/lib/CellphoneIphone";
import ViewDashboard from "@2fd/ant-design-icons/lib/ViewDashboard";
import CreditCard from "@2fd/ant-design-icons/lib/CreditCard";

import { Language } from "../languages";

interface Props {}

export default function CSider({}: Props): ReactElement {
  const { state, dispatch } = useContext(Context);
  const [menuKey, setMenuKey] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [lang, setlang] = useState<any>(null);

  const [collapsed, setCollapsed] = useState({
    collapsed: false,
  });
  useEffect(() => {
    let langs = Language(state.language);
    setlang(langs);
  }, [state.language]);

  const MIST_MENU = [
    {
      key: MENU.DASHBORD,
      title: lang?.Home,
      icon: <ViewDashboard style={{ fontSize: 30 }} />,
    },
    {
      key: MENU.CLOTHING,
      title: lang?.Clothing,
      icon: <TshirtVIcon style={{ fontSize: 30 }} />,
    },
    {
      key: MENU.SHOES,
      title: lang?.Shoes,
      icon: <ShoeSneakerIcon style={{ fontSize: 30 }} />,
    },
    {
      key: MENU.LOUDSPEAKER,
      title: lang?.Loudspeaker,
      icon: <SpeakerIcon style={{ fontSize: 30 }} />,
    },
    {
      key: MENU.GUITAR,
      title: lang?.Guitar,
      icon: <GuitarElectricIcon style={{ fontSize: 30 }} />,
    },
    {
      key: MENU.HEADPHONES,
      title: lang?.Headphones,
      icon: <HeadphonesIcon style={{ fontSize: 30 }} />,
    },
    {
      key: MENU.PHONE,
      title: lang?.Phone,
      icon: <PhonesIcon style={{ fontSize: 30 }} />,
    },
    {
      key: MENU.LIST_PRODUCT,
      title: lang?.ProductList,
      icon: <FormatListBulletedSquareIcon style={{ fontSize: 25 }} />,
    },
    {
      key: MENU.HISTORY,
      title: lang?.ProductHistory,
      icon: <HistoryIcon style={{ fontSize: 25 }} />,
    },
    {
      key: MENU.TRANSPORT,
      title: lang?.ProductShipping,
      icon: <TruckDeliveryOutlineIcon style={{ fontSize: 25 }} />,
    },
    {
      key: MENU.PAYMENTS,
      title: lang?.Payment,
      icon: <CreditCard style={{ fontSize: 25 }} />,
    },
    {
      key: MENU.SETTING,
      title: lang?.Setting,
      icon: <CogOutlineIcon style={{ fontSize: 25 }} />,
    },
  ];

  useEffect(() => {
    if (MIST_MENU) {
      setMenuKey(MIST_MENU[0].key);
    }
    setIsLoading(true);
  }, [state.language]);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  };

  const RouteMenu = (item) => {
    console.log(item);
    dispatch({
      type: "SET_ROUT_MUNU",
      payload: {
        routMenu: item.key,
      },
    });
    setMenuKey(item.key);
  };

  useEffect(() => {}, [lang, MIST_MENU]);

  return (
    <>
      <Siders
        collapsible
        collapsed={collapsed.collapsed}
        onCollapse={onCollapse}
        theme={state.theme}
        width={250}
      >
        {isLoading && (
          <Menu mode="inline" defaultSelectedKeys={[menuKey]} className="Menu">
            {MIST_MENU.map((item, index) => {
              return (
                <Menu.Item
                  key={item.key}
                  className="siderMenu"
                  icon={item.icon}
                  onClick={() => RouteMenu(item)}
                >
                  {item.title}
                </Menu.Item>
              );
            })}
          </Menu>
        )}
      </Siders>
    </>
  );
}

const Siders = styled(Layout.Sider)`
  box-shadow: 0px 0px 5px #000000;
  background-color: ${({ theme }) => theme.primary};
  overflow: hidden;
  .ant-menu-inline .ant-menu-item:not(:last-child) {
    margin-bottom: 0px;
  }
  .ant-menu-vertical .ant-menu-item:not(:last-child) {
    margin-bottom: 0px;
  }
  .ant-layout-sider-trigger {
    background-color: ${({ theme }) => theme.primary};
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${({ theme }) => theme.primary} !important;
    color: #fff;
    height: 60px;
    padding-left: 24px;
    display: flex;
    align-items: center;
    margin: 0px;
  }
  .ant-menu-submenu > .ant-menu-submenu-title {
    height: 60px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.primary};
    margin: 0px;
  }
  .ant-menu-submenu-arrow {
    color: ${({ theme }) => theme.primary};
  }
  .siderMenu {
    height: 60px;
    padding-left: 24px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.primary};
    margin: 0px;
  }

  .Menu {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 0px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0px;
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;
