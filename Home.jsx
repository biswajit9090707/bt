// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-white p-4 space-y-4">
      <h1 className="text-2xl font-bold">Welcome to Graccy 🎧</h1>

      <div className="flex flex-col gap-4">
        <Link to="/search" className="bg-[#282b39] p-4 rounded-xl text-white font-medium">
          🔍 Search
        </Link>
        <Link to="/playlist" className="bg-[#282b39] p-4 rounded-xl text-white font-medium">
          📁 Playlist
        </Link>
        <Link to="/offline" className="bg-[#282b39] p-4 rounded-xl text-white font-medium">
          📥 Offline
        </Link>
      </div>
    </div>
  );
};

export default Home;
