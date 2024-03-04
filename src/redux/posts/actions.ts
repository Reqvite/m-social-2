import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

import { FIREBASE_AUTH, FIREBASE_DB } from "@/app/configs/firebaseConfig";
import { savePhoto } from "@/shared/lib/firebase/photos";
import { PostCreateRequest, PostI } from "@/shared/types/post";

const fetchPosts = async () => {
  try {
    const postsRef = collection(FIREBASE_DB, "posts");
    const querySnapshot = await getDocs(postsRef);
    const posts: PostI[] = [];
    querySnapshot?.forEach((doc) => {
      posts.push({ ...doc.data() } as PostI);
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
    const user = FIREBASE_AUTH.currentUser;
    const photo = await savePhoto(body.photo!);
    const newPostRef = doc(collection(FIREBASE_DB, "posts"));
    const newPost = await setDoc(newPostRef, {
      authorId: user?.uid,
      author: user?.displayName,
      authorPhotoUrl: user?.photoURL,
      likes: [],
      comments: [],
      id: newPostRef.id,
      photoUrl: photo?.downloadUrl,
      title: body.title,
      location: body.location,
    });

    return { data: { post: newPost } };
  } catch (error) {
    return { error };
  }
};

export { createPost, fetchPosts, fetchPostsByUserId, fetchSinglePost };
