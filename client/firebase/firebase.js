// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage,ref,listAll,getDownloadURL, getBlob  } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MEASUREMENT_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
// console.log("🚀 ~ file: firebase.js:26 ~ db", db);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
export const storageRef = ref(storage);
export const imagesRef = ref(storageRef, 'images');
const listRef = ref(imagesRef);
export const getImages=()=>{
  const images=[];
  listAll(imagesRef)
  .then((res) => {
    // res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
      // console.log("FOLDER ARE: ",folderRef);
      
    // });
    
    res.items.forEach((itemRef) => {
      // console.log("🚀 ~ file: firebase.js:42 ~ res.items.forEach ~ itemRef",itemRef.bucket+'/'+itemRef.fullPath)
      // images.push(itemRef.getDownloadURL);
      // console.log(`${itemRef.bucket}/${itemRef.fullPath}`)
      // console.log(itemRef.bucket+'/'+itemRef.fullPath);
      // itemRef.fullPath.getDownloadURL().then((url)=>{
      //   images.push(url);
      // });
      getDownloadURL(ref(storage, itemRef.fullPath))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        images.push(url);
        // This can be downloaded directly:
        // const xhr = new XMLHttpRequest();
        // xhr.responseType = 'blob';
        // xhr.onload = (event) => {
        //   const blob = xhr.response;
        // };
        // xhr.open('GET', url);
        // xhr.send();
      })
      .catch((error) => {
        // Handle any errors
      });
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
    console.error("ERROR IS ", error);
  });
    return images;
}

