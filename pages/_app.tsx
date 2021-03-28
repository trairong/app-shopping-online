import Head from "next/head";
import React, { useEffect, useReducer } from "react";
import { Context, initialState } from "../src/context";
import { reducer } from "../src/context/reducers";
import { changeAntdTheme, generateThemeColor } from "dynamic-antd-theme";
import "../styles/antd.less";
// import { SET_LANGUAGE } from "../src/languages";
import { _getStorage } from "../src/utils/local-storage";
import { KEY_STORAGE } from "../src/constants";

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  useEffect(() => {
    const lang = _getStorage(KEY_STORAGE.LANG);
    dispatch({
      type: "SET_LANGUAGE",
      payload: {
        language: lang === "" || lang === undefined ? "TH" : lang,
      },
    });
    changeAntdTheme(generateThemeColor(state.theme.primary));
  }, [state.theme.primary]);
  return (
    <>
      <Context.Provider value={value}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />{" "}
        </Head>
        <Component {...pageProps} />
      </Context.Provider>
    </>
  );
}

export default MyApp;
