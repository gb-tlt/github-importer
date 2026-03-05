import { doc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../firebase/config'

export function useAdmin() {
  const saveContent = async (pageName, data) => {
    await setDoc(doc(db, 'content', pageName), data, { merge: true })
  }

  const saveCollection = async (name, data) => {
    await setDoc(doc(db, 'collections', name), data, { merge: true })
  }

  const uploadImage = async (file, path) => {
    const storageRef = ref(storage, path)
    await uploadBytes(storageRef, file)
    return getDownloadURL(storageRef)
  }

  return { saveContent, saveCollection, uploadImage }
}
