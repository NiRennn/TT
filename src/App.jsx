import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import PostsList from "./pages/PostsList/PostsList";
import PostPage from "./pages/PostPage/PostPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
