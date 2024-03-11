interface PostCardI {
  title: string;
  photoUrl: string;
  id: string;
  comments: string[];
  likes: string[];
  location: string;
  author: string;
  authorPhotoUrl: string;
  authorUrl?: string;
  geoCode: {
    latitude: number;
    longitude: number;
  };
  createdAt?: Date;
}

type PostI = PostCardI;

type PostCreateRequest = {
  photo: string | undefined;
  location: string;
  title: string;
};

type PostCommentCreateRequest = {
  authorId: string;
  author: string;
  authorPhotoUrl: string;
  id: string;
  postId: string;
  text: string;
  createdAt: number;
};

type PostCommentI = PostCommentCreateRequest;

export type {
  PostCardI,
  PostCommentCreateRequest,
  PostCommentI,
  PostCreateRequest,
  PostI,
};
