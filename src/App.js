import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateGroupPage from "./pages/CreateGroup.page";
import GroupsListPage from "./pages/GroupsList.page";
import EditGroupPage from "./pages/EditGroup.page";
import CreatePostPage from "./pages/CreatePost.page";
import PostsPage from "./pages/Posts.page";
import PostPage from "./pages/Post.page";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GroupsListPage />} />
          <Route path="/create-group" element={<CreateGroupPage />} />
          <Route path="/edit-group/:id" element={<EditGroupPage />} />
          <Route path="/create-post/:group_id" element={<CreatePostPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:post_id" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
