import React from "react";
import { useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
import { getStorage } from "firebase/storage";

export default function Profile() {
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);

  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <img
          src={currentUser.profilePicture}
          alt="profile"
          className="h-24 w-24 self-center cursor-pointer rounded-full mb-5 mt-2"
          onClick={() => fileRef.current.click()}
        ></img>
        <input
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="Username"
          className="bg-slate-100 rounded-lg p-3 "
        ></input>
        <input
          defaultValue={currentUser.email}
          type="email"
          id="email"
          placeholder="Email"
          className="bg-slate-100 rounded-lg p-3 "
        ></input>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 rounded-lg p-3 "
        ></input>
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Update Password
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-600">Delete Account</span>

        <span className="text-red-600">Sign Out</span>
      </div>
    </div>
  );
}
