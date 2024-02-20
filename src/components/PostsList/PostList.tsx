import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import { PostCard } from "@/shared/ui";

const postData = [
  {
    title: "First Post",
    photoUrl:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp",
    id: "post-1",
    comments: "10",
    likes: "20",
    location: "New York",
    author: "John",
    authorUrl:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp",
  },
  {
    title: "Second Post",
    photoUrl:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp",
    id: "post-2",
    comments: "15",
    likes: "25",
    location: "Los Angeles",
    author: "Alice",
    authorUrl:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp",
  },
  {
    title: "Third Post",
    photoUrl:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp",
    id: "post-3",
    comments: "8",
    likes: "18",
    location: "Chicago",
    author: "Bob",
    authorUrl:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp",
  },
  {
    title: "Fourth Post",
    photoUrl:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp",
    id: "post-4",
    comments: "5",
    likes: "12",
    location: "Houston",
    author: "Emma",
    authorUrl:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp",
  },
  {
    title: "Fifth Post",
    photoUrl:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp",
    id: "post-5",
    comments: "12",
    likes: "30",
    location: "San Francisco",
    author: "David",
    authorUrl:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp",
  },
];

export const PostList = () => {
  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.list}
        data={postData}
        showsVerticalScrollIndicator={false}
        renderItem={(post) => <PostCard {...post.item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 35,
  },
});
