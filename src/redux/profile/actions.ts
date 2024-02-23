// import { createAsyncThunk } from "@reduxjs/toolkit";

// import { handleError } from "@/shared/helpers/handleError";
// import { AsyncThunkConfig } from "@/shared/types/store/async-thunk-config.type";
// import {
//   UserRegisterRequestDto,
//   UserRegisterResponseDto,
// } from "@/shared/types/user";

// import { ActionType } from "./common";

// const login = createAsyncThunk<
//   UserLoginResponseDto["user"],
//   UserLoginRequestDto,
//   AsyncThunkConfig
// >(
//   ActionType.LOG_IN,
//   async (
//     request,
//     { dispatch, rejectWithValue, extra: { $api, storageApi, notificationApi } },
//   ) => {
//     try {
//       const { user, token } = await $api.login(request);

//       storageApi.set(StorageKey.TOKEN, token);

//       return user;
//     } catch (error) {
//       return handleError(error, dispatch, rejectWithValue, notificationApi);
//     }
//   },
// );

// const register = createAsyncThunk<
//   UserRegisterResponseDto["user"],
//   UserRegisterRequestDto,
//   AsyncThunkConfig
// >(
//   ActionType.REGISTER,
//   async (request, { extra, dispatch, rejectWithValue }) => {
//     const { $api, notificationApi } = extra;

//     try {
//       const { user, token } = await $api.registration(request);
//       storageApi.set(StorageKey.TOKEN, token);
//       return user;
//     } catch (error) {
//       return handleError(error, dispatch, rejectWithValue, notificationApi);
//     }
//   },
// );

// const logout = createAsyncThunk<null, undefined, AsyncThunkConfig>(
//   ActionType.LOG_OUT,
//   (_request, { extra: { storageApi } }) => {
//     storageApi.drop(StorageKey.TOKEN);
//     return null;
//   },
// );

// const loadCurrentUser = createAsyncThunk<
//   UserAuthResponse,
//   undefined,
//   AsyncThunkConfig
// >(
//   ActionType.LOG_IN,
//   async (
//     _request,
//     { dispatch, rejectWithValue, extra: { $api, notificationApi } },
//   ) => {
//     try {
//       return await $api.getCurrentUser();
//     } catch (error) {
//       return handleError(error, dispatch, rejectWithValue, notificationApi);
//     }
//   },
// );

// export { loadCurrentUser, login, logout, register };
