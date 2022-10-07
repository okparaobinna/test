import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import addPostForm from "../Feature/Posts/postSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const submitPost = () => {
    if (title && content) {
      dispatch(
        addPostForm({
          id:nanoid(),
          title,
          content,
        }
         
        )
      );
      setTitle("");
    setContent("");
    }
    console.log("its work");
    
  };

  const onSetTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onsetContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <h1 style={{ color: "#ffff", textAlign: "center" }}>Add Post</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <form style={{}}>
          <div>
            <p>
              <label style={{ color: "#ffff", fontWeight: "bolder" }}>
                Tittle :
              </label>
            </p>
            <input
            name="tittle"
              type="text"
              value={title}
              onChange={onSetTitleChange}
              style={{
                padding: "5px",
                border: "3px solid blue",
                outline: "none",
              }}
            />
          </div>
          <div>
            <p>
              {" "}
              <label style={{ color: "#ffff", fontWeight: "bolder" }}>
                Author :
              </label>
            </p>
            <input style={{ padding: "5px", border: "3px solid blue" }} />
          </div>
          <div>
            <p>
              <label style={{ color: "#ffff", fontWeight: "bolder" }}>
                Content :
              </label>
            </p>
            <textarea
            
              type="text"
              value={content}
              onChange={onsetContentChange}
              id="w3review"
              name="content"
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <div>
            <br></br>
            <button
              onClick={submitPost}
              style={{ padding: "10px", width: "120px", cursor: "pointer" }}
            >
              save post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPostForm;
