import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import { FIREBASE_AUTH, FIREBASE_DB } from "@/app/configs/firebaseConfig";
import { savePhoto } from "@/shared/lib/firebase/photos";
import { geoCodeAsync } from "@/shared/lib/helpers";
import {
  PostCommentCreateRequest,
  PostCreateRequest,
  PostI,
} from "@/shared/types/post";
import { UserData } from "@/shared/types/user";

const fetchPosts = async () => {
  try {
    const postsRef = collection(FIREBASE_DB, "posts");
    const querySnapshot = await getDocs(
      query(postsRef, orderBy("createdAt", "desc")),
    );
    const posts: PostI[] = [];
    querySnapshot?.forEach((doc) => {
      const postData = doc.data();
      posts.push({ ...postData } as PostI);
    });
    return { data: posts };
  } catch (error) {
    return { error };
  }
};

async function fetchPostsByUserId() {
  const user = FIREBASE_AUTH.currentUser;

  try {
    const postsRef = collection(FIREBASE_DB, "posts");
    const querySnapshot = await getDocs(
      query(postsRef, where("authorId", "==", user?.uid)),
    );
    const posts: PostI[] = [];
    querySnapshot.forEach((doc) => {
      posts.push({ ...doc.data() } as PostI);
    });
    return { data: posts };
  } catch (error) {
    return { error };
  }
}

const fetchSinglePost = async (id: string) => {
  try {
    const docRef = doc(FIREBASE_DB, "posts", id);
    const snapshot = await getDoc(docRef);
    return { data: snapshot.data() };
  } catch (error) {
    return { error };
  }
};

const createPost = async (body: PostCreateRequest) => {
  try {
    let geoCode = {};
    const user = FIREBASE_AUTH.currentUser;
    const photo = await savePhoto(body.photo!);
    const newPostRef = doc(collection(FIREBASE_DB, "posts"));
    if (body.location) {
      geoCode = await geoCodeAsync(body.location);
    }

    console.log(geoCode);
    const newPost = await setDoc(newPostRef, {
      authorId: user?.uid,
      author: user?.displayName,
      authorPhotoUrl: user?.photoURL,
      likes: [],
      comments: [],
      id: newPostRef.id,
      photoUrl: photo?.downloadUrl,
      title: body.title,
      location: body.location || "",
      geoCode: geoCode?.latitude
        ? geoCode
        : { latitude: 35.905, longitude: -41.256 },
      createdAt: new Date().getTime(),
    });

    return { data: { post: newPost } };
  } catch (error) {
    return { error };
  }
};

const likePost = async (postId: string) => {
  try {
    const currentUser = FIREBASE_AUTH.currentUser!;
    const userId = currentUser.uid;
    const postRef = doc(FIREBASE_DB, "posts", postId);
    const postSnapshot = await getDoc(postRef);
    const post = postSnapshot.data() as PostI;
    const userRef = doc(FIREBASE_DB, "users", userId);
    const userSnapshot = await getDoc(userRef);
    const user = userSnapshot.data() as UserData;

    if (postSnapshot.exists() && userSnapshot.exists()) {
      if (post.likes.includes(userId)) {
        user.likes = user.likes.filter((id) => id !== postId);
        post.likes = post.likes.filter((id) => id !== userId);
      } else {
        user.likes.push(postId);
        post.likes.push(userId);
      }

      await updateDoc(userRef, { likes: user.likes });

      await updateDoc(postRef, { likes: post.likes });
    }

    return { data: { post: post.likes.length } };
  } catch (error) {
    return { error };
  }
};

const createComment = async (body: PostCommentCreateRequest) => {
  try {
    const user = FIREBASE_AUTH.currentUser;
    const newCommentRef = doc(collection(FIREBASE_DB, "comments"));

    const newComment = await setDoc(newCommentRef, {
      authorId: user?.uid,
      author: user?.displayName,
      authorPhotoUrl: user?.photoURL,
      id: newCommentRef.id,
      postId: body.postId,
      text: body.text,
      createdAt: new Date().getTime(),
    });

    const postRef = doc(FIREBASE_DB, "posts", body.postId);
    const postSnapshot = await getDoc(postRef);
    const post = postSnapshot.data() as PostI;
    post.comments.push(newCommentRef.id);

    await updateDoc(postRef, { comments: post.comments });

    return { data: { post: newComment } };
  } catch (error) {
    return { error };
  }
};

const fetchCommentsByPostId = async (postId: string) => {
  try {
    const postRef = doc(FIREBASE_DB, "posts", postId);
    const postSnap = await getDoc(postRef);

    if (postSnap.exists()) {
      const postData = postSnap.data();
      const commentIds: string[] = postData.comments;
      const comments = await Promise.all(
        commentIds.map(async (commentId) => {
          const commentRef = doc(FIREBASE_DB, "comments", commentId);
          const commentSnap = await getDoc(commentRef);
          if (commentSnap.exists()) {
            const commentData = commentSnap.data();
            return { ...commentData };
          }
          return null;
        }),
      );
      const filteredComments = comments.filter((comment) => comment !== null);

      return { data: filteredComments };
    } else {
      return { data: [] };
    }
  } catch (error) {
    return { error };
  }
};

export {
  createComment,
  createPost,
  fetchCommentsByPostId,
  fetchPosts,
  fetchPostsByUserId,
  fetchSinglePost,
  likePost,
};
