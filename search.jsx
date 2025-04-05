import React, { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search</h2>
      <input
        type="text"
        placeholder="Search songs, artists..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 rounded-lg bg-[#282b39] text-white placeholder:text-gray-400 focus:outline-none mb-4"
      />
      {/* Search results can go here */}
      <p>Search query: {query}</p>
    </div>
  );
}
