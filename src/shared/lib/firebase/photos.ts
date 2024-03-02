import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

interface PhotoI {
  downloadUrl: string;
}

const savePhoto = async (
  photo: string,
  onProgress?: (progress: number) => void,
): Promise<PhotoI | null> => {
  try {
    const fetchResponse = await fetch(photo);
    const theBlob = await fetchResponse.blob();
    const id = Date.now();
    const imageRef = ref(getStorage(), `images/${id}`);

    const uploadTask = uploadBytesResumable(imageRef, theBlob);
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress && onProgress(progress);
        },
        (error) => {
          console.log(error);
          reject(error);
        },
        async () => {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          resolve({
            downloadUrl,
            // metadata: uploadTask.snapshot.metadata,
          });
        },
      );
    });
  } catch (error) {
    console.error("Error saving photo to Firebase Storage:", error);
    return null;
  }
};

const deletePhoto = async (photoUrl: string): Promise<void> => {
  try {
    const storage = getStorage();
    const imageRef = ref(storage, photoUrl);
    await deleteObject(imageRef);
  } catch (error) {
    console.error("Error deleting photo from Firebase Storage:", error);
  }
};

export { deletePhoto, savePhoto };
