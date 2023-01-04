import { doc, setDoc } from 'firebase/firestore';
import { db, storage } from '../firbase/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

export const createConference = async (values) => {
  try {
    const res = await setDoc(doc(db, 'Conferences', uuidv4()), values);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export const imageUpload = (file, setImg) => {
  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      console.log('Upload is ' + progress + '% done');
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImg(downloadURL);
      });
    }
  );
};
