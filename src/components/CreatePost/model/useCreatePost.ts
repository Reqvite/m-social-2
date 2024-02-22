import { useReducer } from "react";

type FormState = {
  photo: string | undefined;
  title: string;
  location: string;
};

type Action =
  | { type: "SET_PHOTO"; payload: string | undefined }
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_LOCATION"; payload: string }
  | { type: "RESET_STATE" };

const initialState: FormState = {
  photo: undefined,
  title: "",
  location: "",
};

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "SET_PHOTO":
      return { ...state, photo: action.payload };
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export const useCreatePost = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return { dispatch, state };
};
