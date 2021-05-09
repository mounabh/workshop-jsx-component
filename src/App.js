import React from 'react';
import './App.css';
import MainVideo from './components/MainVideo/MainVideo';
import SuggestionVideos from './components/suggestion/SuggestionVideos';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row mt-3'>
        <MainVideo />
        <SuggestionVideos />
      </div>
      <div className='row'>
        <Comments />
      </div>
    </div>
  );
}

export default App;
