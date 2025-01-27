import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { NewPost } from "./AddPosts";

export const UpdatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const mutation = useMutation((updatedPost: NewPost) =>
    axios.put("https://jsonplaceholder.typicode.com/posts/1", updatedPost)
  );

  const submitData = () => {
    mutation.mutate({ title, body });
  };

  if (mutation.isLoading) {
    return <span>Updating...</span>;
  }

  if (mutation.isError) {
    return (
      <span>Error: {(mutation?.error as { message: string })?.message}</span>
    );
  }

  if (mutation.isSuccess) {
    return <span>Post updated!</span>;
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button onClick={submitData}>Update</button>
    </div>
  );
};
