const NODE_ENV = process.env.NODE_ENV;

console.log('====NODE_ENV======',NODE_ENV)

export const HOST = {
  URL: NODE_ENV.trim() === "development" ? "http://localhost:4000/api/" : "",
  API: {
    AUTH: {
      GET_PRODUCT: "product",
      POST_REGISTER: "register",
    },
  },
};

export const ROUTE_MENU = {
  DASHBORD: "pages/dashbord",
  CLOTHING: "pages/product",
  SHOES: "pages/shoes",
  LOUDSPEAKER: "pages/Loudspeaker",
  GUITAR: "pages/Guitar",
  HEADPHONES: "pages/Headphones",
  PHONE: "pages/Phone",
  LIST_PRODUCT: "pages/list-product",
  HISTORY: "pages/history",
  TRANSPORT: "pages/transport",
  PAYMENTS: "pages/payments",
  SETTING: "pages/setting",
};

export const KEY_STORAGE = {
  THEME: "SET_THEME",
  LANG: "SET_LANGUAGE",
};
