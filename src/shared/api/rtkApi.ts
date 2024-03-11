import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import { RtkApiTags } from "../const";

export const rtkApi = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  tagTypes: [
    RtkApiTags.HomePosts,
    RtkApiTags.ProfilePosts,
    RtkApiTags.PostComments,
  ],
  endpoints: () => ({}),
});
