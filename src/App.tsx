import { AddPosts } from "./components/AddPosts";
import { DisplayPosts } from "./components/DisplayPosts";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <DisplayPosts />
      <AddPosts />
    </div>
  );
}
