import React from 'react';

const ShowPosts = ({ posts }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h1 className='font-bold'>Name</h1>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700">{post.content}</p>
            <button className='bg-gray-600 rounded-md p-3'>view profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowPosts;
