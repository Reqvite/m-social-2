interface PostCardI {
  title: string;
  photoUrl: string;
  id: string;
  comments: string;
  likes: string;
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

export type { PostCardI, PostCreateRequest, PostI };
