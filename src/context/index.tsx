import { createContext, Dispatch } from "react";

export type ActionType =
  | "SET_TOKEN"
  | "SET_LANGUAGE"
  | "SET_PRIMARY"
  | "SET_TOOLBAR"
  | "SET_USER"
  | "LOGIN"
  | "LOGOUT"
  | "REGISTER"
  | "SET_COMPANY"
  | "SET_ROUT_MUNU";

export interface IContext {
  state: InitialState | null;
  dispatch: Dispatch<Action>;
}

export interface Action {
  type: ActionType;
  payload?: ActionPayload;
}

interface ActionPayload {
  userToken?: string;
  routMenu?: string;
  language?: string;
  user?: any;
  theme?: Theme;
  primary?: string;
  toolbar?: string;
  [key: string]: any;
}

interface Theme {
  primary: string;
  link: string;
  success: string;
  warning: string;
  error: string;
  toolbar: string;
  outline: string;
  white: string;
}
interface ILanguage {
  TH: string;
  EN: string;
}

export interface InitialState {
  user: User;
  language: string;
  routMenu: string;
  userToken: string | null;
  theme: Theme | null;
}

export interface User {
  companyKey?: string;
  email?: string;
  firstName?: string;
  key?: string;
  lastName?: string;
  package?: string;
  phoneNumber?: string;
  role?: string;
  updateDate?: string;
  [key: string]: any;
}

export const initialState: InitialState = {
  user: null,
  language: "TH",
  routMenu: "pages/dashbord",
  userToken: null,
  theme: {
    // primary: "#263238",
    primary: "#004d40",
    // primary: "#1a237e",
    // primary: "#4a148c",
    // primary: "#880e4f",
    // primary: "#212121",
    link: "#007AFF",
    success: "#4CD964",
    warning: "#FF9500",
    error: "#FF3B30",
    toolbar: "#000000",
    outline: "#ffffff",
    white: "#ffffff",
  },
};

export const Context = createContext<IContext>(null);
