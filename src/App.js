import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Diary from './components/Diary/Diary';
import Header from './components/Header/Header';
import Episodes from './components/Episodes/Episodes';
import CreateEpisode from './components/CreateEpisode/CreateEpisode';
import EpisodePage from './components/EpisodePage/EpisodePage';
import Feedbacks from './components/Feedbacks/Feedbacks';
import CreateFeedback from './components/CreateFeedback/CreateFeedback';
import FeedbackPage from './components/FeedbackPage/FeedbackPage';
import ThanksPage from './components/ThanksPage/ThanksPage';
function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Header />}>
          <Route path='diary' element={<Diary />} />
          <Route path='episodes' element={<Episodes />} />
          <Route path='thanks' element={<ThanksPage />} />
          <Route path='feedbacks' element={<Feedbacks />} />
          <Route path='feedback/:FeedbackKey' element={<FeedbackPage />} />
          <Route path='create-feedback/:id' element={<CreateFeedback />} />
          <Route path='create-feedback' element={<CreateFeedback />} />
          <Route path='create-episode/:NameOfChapter' element={<CreateEpisode />} />
          <Route path='create-episode' element={<CreateEpisode />} />
          <Route path='episode/:NameOfChapter' element={<EpisodePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
