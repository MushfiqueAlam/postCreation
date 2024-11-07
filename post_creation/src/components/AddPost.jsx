import React, { useState } from 'react';

const AddPost = ({ addNewPost }) => {
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      addNewPost(newPost);
      setNewPost({ title: '', content: '' });
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-[50%] items-center mx-[30%]">
      <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
      <form onSubmit={handleAddPost} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Content:</label>
          <textarea
            name="content"
            placeholder='Write your post'
            value={newPost.content}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
