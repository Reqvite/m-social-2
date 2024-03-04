import { type TypedUseSelectorHook, useSelector } from "react-redux";

import { store } from "@/app";

const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.instance.getState>
> = useSelector;

export { useAppSelector };
