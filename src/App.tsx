import { AddPosts } from "./components/AddPosts";
import { DeletePost } from "./components/DeletePosts";
import { DisplayPosts } from "./components/DisplayPosts";
import { UpdatePost } from "./components/UpdatePosts";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <DisplayPosts />
      <AddPosts />
      <UpdatePost />
      <DeletePost />
    </div>
  );
}
