// import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

//  const firebaseConfig = {
//    apiKey: "AIzaSyB-KLiUeU2KqbQIjaE6zUJwFi8KzIlZhdc",
//    authDomain: "chat-9a631.firebaseapp.com",
//    projectId: "chat-9a631",
//    storageBucket: "chat-9a631.appspot.com",
//    messagingSenderId: "999748027297",
//    appId: "1:999748027297:web:4526839ac2924a230481e0",
//  };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth();

// export { auth, app };
// export const storage = getStorage();


import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-KLiUeU2KqbQIjaE6zUJwFi8KzIlZhdc",
  authDomain: "chat-9a631.firebaseapp.com",
  projectId: "chat-9a631",
  storageBucket: "chat-9a631.appspot.com",
  messagingSenderId: "999748027297",
  appId: "1:999748027297:web:4526839ac2924a230481e0",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth();
export { app, storage,auth };
