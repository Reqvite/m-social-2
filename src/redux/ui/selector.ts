import { store } from "@/app";

export const selectIsRegisteredCompleted = (
  state: ReturnType<typeof store.instance.getState>,
) => state.ui.isRegisterCompleted;
