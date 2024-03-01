import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const savePhoto = async (photo: string): Promise<string | null> => {
  const storage = getStorage();
  const id = Date.now();
  const storageRef = ref(storage, `images/${id}`);
  const resp = await fetch(photo);
  const file = await resp.blob();
  await uploadBytes(storageRef, file);
  const link = await getDownloadURL(ref(storage, `images/${id}`));
  return link;
};

export { savePhoto };
