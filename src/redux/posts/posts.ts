import { rtkApi } from "@/shared/api/rtkApi";
import { RtkApiTags } from "@/shared/const";
import { PostCommentI, PostI } from "@/shared/types/post";

import {
  createComment,
  createPost,
  fetchCommentsByPostId,
  fetchPosts,
  fetchPostsByUserId,
  fetchSinglePost,
  likePost,
} from "./actions";

export const postsApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchPostsByUserId: builder.query<PostI[], void>({
      async queryFn() {
        return await fetchPostsByUserId();
      },
      keepUnusedDataFor: 0,
      providesTags: [RtkApiTags.ProfilePosts],
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
      invalidatesTags: [RtkApiTags.HomePosts, RtkApiTags.ProfilePosts],
    }),
    likePost: builder.mutation({
      async queryFn(id) {
        return likePost(id);
      },
      invalidatesTags: [RtkApiTags.HomePosts, RtkApiTags.ProfilePosts],
    }),
    addPostComment: builder.mutation({
      async queryFn({ body }) {
        return createComment(body);
      },
      invalidatesTags: [
        RtkApiTags.HomePosts,
        RtkApiTags.PostComments,
        RtkApiTags.ProfilePosts,
      ],
    }),
    fetchCommentsByPostId: builder.query<PostCommentI[], string>({
      //@ts-expect-error ///
      async queryFn(id) {
        return await fetchCommentsByPostId(id);
      },
      providesTags: [RtkApiTags.PostComments],
    }),
  }),
});

export const useGetPostComments = postsApi.useFetchCommentsByPostIdQuery;
export const useGetUserPosts = postsApi.useFetchPostsByUserIdQuery;
export const useGetPosts = postsApi.useFetchPostsQuery;
export const useGetPost = postsApi.useFetchSinglePostQuery;
export const useCreatePostMutation = postsApi.useCreatePostMutation;
export const useCreatePostCommentMutation = postsApi.useAddPostCommentMutation;
export const useLikePostMutation = postsApi.useLikePostMutation;
