import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddPost from './components/AddPost';
import ShowPosts from './components/ShowPosts';

const App = () => {
  const [posts, setPosts] = useState([
    { title: 'Post 1', content: 'This is the content of the first post.' },
    { title: 'Post 2', content: 'This is the content of the second post.' },
    { title: 'Post 3', content: 'This is the content of the third post.' },
  ]);

  const addNewPost = (post) => {
    setPosts((prevPosts) => [ post,...prevPosts]);
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        
        {/* Navbar */}
        <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-white text-2xl font-bold">Post Manager</h1>
            <div className="space-x-4">
              <Link to="/add-post" className="text-white bg-gray-600 p-3 rounded-md hover:text-blue-200">+Post</Link>
              <Link to="/show-posts" className="text-white bg-gray-600 p-3 rounded-md hover:text-blue-200">All Posts</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto p-8">
          <Routes>
            <Route path="/add-post" element={<AddPost addNewPost={addNewPost} />} />
            <Route path="/show-posts" element={<ShowPosts posts={posts} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
