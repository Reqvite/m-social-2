import { rtkApi } from "@/shared/api/rtkApi";
import { RtkApiTags } from "@/shared/const";
import { PostI } from "@/shared/types/post";

import {
  createPost,
  fetchPosts,
  fetchPostsByUserId,
  fetchSinglePost,
} from "./actions";

export const postsApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchPostsByUserId: builder.query<PostI[], void>({
      async queryFn() {
        return await fetchPostsByUserId();
      },
    }),
    fetchPosts: builder.query<PostI[], void>({
      async queryFn() {
        return await fetchPosts();
      },
      providesTags: [RtkApiTags.HomePosts],
    }),
    fetchSinglePost: builder.query({
      async queryFn(id) {
        return fetchSinglePost(id);
      },
    }),
    createPost: builder.mutation({
      async queryFn({ body }) {
        return createPost(body);
      },
      invalidatesTags: [RtkApiTags.HomePosts],
    }),
  }),
});

export const useGetPosts = postsApi.useFetchPostsQuery;
export const useGetPost = postsApi.useFetchSinglePostQuery;
export const useCreatePostMutation = postsApi.useCreatePostMutation;
