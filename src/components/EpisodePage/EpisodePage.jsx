import React, { useEffect, useState } from 'react';
import './EpisodePage.css';
import { useNavigate, useParams } from 'react-router-dom';
import { chapterService } from '../../services/chapter.service';



function EpisodePage() {
  const [episode, setEpisode] = useState(null);
  const { NameOfChapter } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (NameOfChapter) {
      loadEpisode();
    }
  }, []);

  const loadEpisode = async () => {
    const data = await chapterService.getById(NameOfChapter);
    setEpisode(data);
  };
  return episode ? (
    <div className='episode-page  center'>

<div className="container card ">

<div className='episode-time'>

        <div className='episode-date'> {new Date(episode.ChapterDate).toLocaleDateString('en-us')} </div>
        <div className='episode-hour'>{episode.ChapterTime}</div>
      </div>
      <div className='episode-content'>
        <div className='episode-title'>{episode.NameOfChapter}</div>
        <div className='episode-desc'>{episode.ChapterDescription}</div>
        <img className='episode-img' src={episode.ChapterPictures} alt='' />
      </div></div>
    </div>
  ) : (
    <div className='loading'>loading...</div>
  );
}

export default EpisodePage;
