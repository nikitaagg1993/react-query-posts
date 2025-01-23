import axios from "axios";
import { useQuery } from "react-query";

const retrievePosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};
export const DisplayPosts = () => {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery("postsData", retrievePosts);

  if (isLoading) return <div>Fetching posts...</div>;
  if (error)
    return (
      <div>An error occurred: {(error as { message: string })?.message}</div>
    );
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
