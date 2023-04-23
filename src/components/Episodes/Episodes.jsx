import React, { useEffect, useState } from 'react';
import './Episodes.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { chapterService } from '../../services/chapter.service';
function Episodes() {
  const navigate = useNavigate();

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    loadEpisodes();
  }, []);

  const remove = async (id) => {
    console.log({ id });
    await chapterService.remove(id);
    loadEpisodes();
  };

  const edit = (id) => {
    console.log({ id });
    navigate(`/create-episode/${id}`);
  };

  const loadEpisodes = async () => {
    const res = await chapterService.getAll();

    setEpisodes(res);
  };

  return (
    <div className='episodes-page center'>
      <div className='title'>יומן המסע שלי</div>
      <div className='episodes'>
        {episodes.map((e) => {
          return (
            <div className='episode card'>
              <div className='episode-time'>
                <div className='episode-date'> {new Date(e.ChapterDate).toLocaleDateString('en-us')} </div>
                <div className='episode-hour'>{e.ChapterTime}</div>
              </div>
              <div className='episode-content'>
                <div className='episode-title'>{e.NameOfChapter}</div>
                <div className='episode-desc'>{e.ChapterDescription.length > 20 ? e.ChapterDescription.substring(0, 20) + '...' : e.ChapterDescription}</div>
                <img src={e.ChapterPictures} alt='' />

                <div className='btns'>
                  <Button
                    className='btn btn-edit'
                    variant='contained'
                    onClick={() => edit(e.NameOfChapter)}
                  >
                    עריכה
                  </Button>
                  <Button
                    className='btn btn-edit'
                    variant='contained'
                    onClick={() => navigate(`/episode/${e.NameOfChapter}`)}
                  >
                    תצוגה
                  </Button>
                  <Button
                    className='btn btn-edit'
                    variant='contained'
                    onClick={() => remove(e.NameOfChapter)}
                  >
                    מחיקה
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Episodes;
