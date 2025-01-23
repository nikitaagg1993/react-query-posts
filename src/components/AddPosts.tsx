import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

type NewPost = {
  title: string;
  body: string;
};

export const AddPosts = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const mutation = useMutation((newPost: NewPost) =>
    axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
  );

  const submitData = () => {
    mutation.mutate({ title, body });
  };

  if (mutation.isLoading) {
    return <span>Submitting...</span>;
  }

  if (mutation.isError) {
    return (
      <span>Error: {(mutation?.error as { message: string })?.message}</span>
    );
  }

  if (mutation.isSuccess) {
    return <span>Post submitted!</span>;
  }

  return (
    <>
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
      <button onClick={submitData}>Submit</button>
    </>
  );
};
