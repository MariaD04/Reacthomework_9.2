import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostRoute from "./pages/PostRoute";
import "./App.css";
import ClosableHeader from "./components/ClosableHeader";
import { usePosts } from "./contexts/PostsContext";

export default function App() {
  const { posts } = usePosts()

  return (
    <div className="app-container">
      <div className="border" style={{ width: "500px", background: "rgb(240,240,240)" }}>
        <Routes>
          <Route path="/" element={<HomePage posts={posts} />} />
          <Route path="/posts/:pId" element={<PostRoute />} />
          <Route path="*" element={<ClosableHeader>Не найдено</ClosableHeader>} />
        </Routes>
      </div>
    </div>
  )
}