import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";

import { FIREBASE_DB } from "@/app/configs/firebaseConfig";
import { PostCreateRequest, PostI } from "@/shared/types/post";

const fetchPosts = async () => {
  try {
    const postsRef = collection(FIREBASE_DB, "posts");
    const querySnapshot = await getDocs(postsRef);
    const posts: PostI[] = [];
    querySnapshot?.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() } as PostI);
    });
    return { data: posts };
  } catch (error) {
    return { error };
  }
};

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
    const docRef = await addDoc(collection(FIREBASE_DB, "posts"), body);
    return { data: { id: docRef.id, ...body } };
  } catch (error) {
    return { error };
  }
};

export { createPost, fetchPosts, fetchSinglePost };
