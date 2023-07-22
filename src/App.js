import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './components/Home';
import { VideoPage } from './components/VideoPage';
import { SearchResults } from './components/SearchResults';
// import { ChannelPage } from './components/ChannelPage';

function App() {

  const [sideBar, setSideBar] = useState(true);
  const [searchTerm,setSearchTerm] = useState('');
  const [videos,setVideos] = useState(null);


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar videos={videos} setVideos={setVideos} searchTerm={searchTerm} setSearchTerm={setSearchTerm} sideBar={sideBar} setSideBar={setSideBar} />
      <Sidebar sideBar={sideBar} setSideBar={setSideBar} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home videos={videos} setVideos={setVideos} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        <Route path="/video/:id" element={<VideoPage  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        <Route path="/search/:searchTerm" element={<SearchResults videos={videos} setVideos={setVideos} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        {/* <Route path="/channel/:channelId" element={<ChannelPage videos={videos} setVideos={setVideos} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
