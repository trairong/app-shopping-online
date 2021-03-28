import { Action, initialState, InitialState } from ".";

export const reducer = (
  state: InitialState,
  { type, payload }: Action
): InitialState => {
  switch (type) {
    case "SET_PRIMARY":
      return {
        ...state,
        theme: {
          ...state.theme,
          primary: payload.primary,
        },
      };
    case "SET_ROUT_MUNU":
      return {
        ...state,
        routMenu: payload.routMenu,
      };
    case "SET_LANGUAGE":
      return {
        ...state,
        language: payload.language,
      };
    default:
      return state;
  }
};
