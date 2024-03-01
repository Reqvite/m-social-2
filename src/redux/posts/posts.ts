import { rtkApi } from "@/shared/api/rtkApi";
import { PostI } from "@/shared/types/post";

import { createPost, fetchPosts, fetchSinglePost } from "./actions";

export const postsApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchPosts: builder.query<PostI[], void>({
      async queryFn() {
        return await fetchPosts();
      },
    }),
    fetchSinglePost: builder.query({
      async queryFn(id) {
        return fetchSinglePost(id);
      },
    }),
    createPost: builder.mutation({
      async queryFn(body) {
        return createPost(body);
      },
    }),
  }),
});

export const useGetPosts = postsApi.useFetchPostsQuery;
export const useGetPost = postsApi.useFetchSinglePostQuery;
