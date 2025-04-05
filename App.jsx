import React, { useState } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Playlist from "./pages/Playlist";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "search":
        return <Search />;
      case "playlist":
        return <Playlist />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#111218] text-white font-sans">
      <div className="flex-1 overflow-y-auto pb-20">{renderPage()}</div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1c1e27] p-2 px-6 flex justify-between items-center border-t border-[#3b4054]">
        <button onClick={() => setCurrentPage("home")} className="flex flex-col items-center text-sm">
          <div className="w-6 h-6 mb-1 bg-white rounded-full"></div>
          Home
        </button>
        <button onClick={() => setCurrentPage("search")} className="flex flex-col items-center text-sm">
          <div className="w-6 h-6 mb-1 bg-white rounded-full"></div>
          Search
        </button>
        <button onClick={() => setCurrentPage("playlist")} className="flex flex-col items-center text-sm">
          <div className="w-6 h-6 mb-1 bg-white rounded-full"></div>
          Playlist
        </button>
      </div>
    </div>
  );
}
