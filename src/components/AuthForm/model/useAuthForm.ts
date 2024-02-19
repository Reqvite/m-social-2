import { useReducer } from "react";

type FormState = {
  login: string;
  email: string;
  password: string;
};

type Action =
  | { type: "SET_LOGIN"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string };

const initialState: FormState = {
  login: "",
  email: "",
  password: "",
};

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...state, login: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const useAuthForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return { dispatch, state };
};
