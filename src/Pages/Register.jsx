import React, { useState } from "react";
import avatar from "../Images/avatar.png";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


import { auth } from "../firebase";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Register = () => {
  const [err, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storage = getStorage();
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

    
      uploadTask.on(
        "state_changed",

        (err) => {
          setError(true);
        },
        () => {
       
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (err) {
      setError(true);
    }
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Chat With Us</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="file" id="file" />
            <label htmlFor="file">
              <img src={avatar} alt="" />
              <span>Add an Avatar</span>
            </label>
            <button>SignUp</button>
            {err && <span>something went wrong</span>}
          </form>
          <p>You do have any account? Login</p>
        </div>
      </div>
    );
  };
};
export default Register;
