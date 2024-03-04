import { useDispatch } from "react-redux";

import { store } from "@/app";

const useAppDispatch: () => typeof store.instance.dispatch = () => {
  return useDispatch<typeof store.instance.dispatch>();
};

export { useAppDispatch };
