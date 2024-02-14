import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import { auth, db, storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const InformationPage = ({ mode, user }) => {
  const [photoFileUpload, setPhotoFileUpload] = useState(null);
  const [trackupload, setTrackUpload] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);
  const [adminPost, setAdminPost] = useState([]);
  const [post, setPost] = useState([]);

  const CommentRef = collection(db, "Comment");
  const postRef = collection(db, "Post");
  const currentUser = auth.currentUser;
  const AdminPost = user?.filter((r) => r.role === "Admin");
  const directPost = AdminPost.map((r) => r.email === currentUser.email);

  const handleChange = (e) => {
    const newPost = {
      ...photoFileUpload,
      [e.target.name]: e.target.value,
      name: currentUser.displayName,
      profilePics: currentUser.photoURL,
      day: new Date().toDateString(),
    };
    if (directPost) {
      setAdminPost({ ...adminPost, ...newPost });
    } else {
      setComments({ ...comments, ...newPost });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment !== null || adminPost !== null) {
      if (directPost) {
        await addDoc(postRef, {
          ...adminPost,
        });
      } else {
        await addDoc(CommentRef, {
          ...comments,
        });
      }
    } else {
      alert("please type your comment and procced");
    }
  };
  console.log(directPost);
  useEffect(() => {
    const unsubsDoc = onSnapshot(
      collection(db, "Post"),
      (snapShot) => {
        const post = [];
        snapShot.forEach((doc) => {
          post.push({ id: doc.id, ...doc.data() });
        });
        setPost(post);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsubsDoc();
    };
  }, []);
  useEffect(() => {
    const unsubsDoc = onSnapshot(
      collection(db, "Comment"),
      (snapShot) => {
        const comment = [];
        snapShot.forEach((doc) => {
          comment.push({ id: doc.id, ...doc.data() });
        });
        setComment(comment);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsubsDoc();
    };
  }, []);

  useEffect(() => {
    const uploadfile = () => {
      const identity = new Date().getTime() + photoFileUpload.name;
      const storageRef = ref(storage, "Post_Image/" + identity);
      const uploadTask = uploadBytesResumable(storageRef, photoFileUpload);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setTrackUpload(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },

        (error) => {
          console.log(error);
        },

        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setComments({ ...comments, photo: downloadURL });
          });
        }
      );
    };
    photoFileUpload && uploadfile();
  }, [photoFileUpload]);
  return (
    <div className={mode ? "postForm" : "postFormDark"}>
      <div className="lg:w-[50%] w-[90%] m-[1rem] ">
        <p className={mode ? "headDesc" : "headDescDark"}>Information center</p>
        <p className={mode ? "text-[black]" : "text-white"}>
          You can contribute to our company development by raising your comment
          and contribution here,as every single pieces of information render is
          highly valuable to us.
        </p>
      </div>
      <p className={mode ? "borderDesign" : "borderDesignDark"}></p>
      {post?.map(({ text, photo, day }, i) => (
        <div key={i} className="post_info">
          {photo && <img src={photo} alt="" className="postPhotos" />}
          <p className="info_text">{text}</p>
          <p className="date">{day}</p>
        </div>
      ))}

      {comment.map(({ text, photo, day, name, profilePics, i }) => (
        <div key={i} className="comment_info">
          {profilePics && (
            <img src={profilePics} alt="" className="Authoricon" />
          )}{" "}
          <p>{name}</p>
          {photo && <img src={photo} alt="" className="postPhotos" />}
          <p className="info_text">{text}</p>
          <p className="date">{day}</p>
        </div>
      ))}
      <form onChange={(e) => handleChange(e)}>
        <input
          type="file"
          id="fileInput"
          name="file"
          className="outline-0 hidden"
          onChange={(e) => setPhotoFileUpload(e.target.files[0])}
        />
        <textarea
          name="text"
          id="comment"
          cols="25"
          rows="6"
          className={mode ? "textarea" : "textareaDark"}
          placeholder="write your comment here...."
        ></textarea>
        <div>
          <label
            htmlFor="fileInput"
            className={mode ? "postBtn" : "postBtnDark"}
          >
            {trackupload !== null && trackupload < 100 ? (
              <i> loading...</i>
            ) : (
              "Add photos"
            )}
          </label>
          <button
            type="button"
            disabled={trackupload !== null && trackupload < 100}
            onClick={(e) => handleSubmit(e)}
          >
            <BiSend className="send" title="send" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InformationPage;
