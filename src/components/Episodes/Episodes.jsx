import React, { useEffect, useState } from 'react';
import './Episodes.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { chapterService } from '../../services/chapter.service';
import  jeep from '../../assets/jeep.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



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
            <div className='episode'>
              <Card sx={{ maxWidth: 345 }}>
              <div className='episode-time'>
                <div className='episode-date'> {new Date(e.ChapterDate).toLocaleDateString('en-us')} </div>
                <div className='episode-hour'>{e.ChapterTime}</div>
              </div>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        src={jeep}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <div className='episode-title'>{e.NameOfChapter}</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <div className='episode-desc'>{e.ChapterDescription.length > 20 ? e.ChapterDescription.substring(0, 20) + '...' : e.ChapterDescription}</div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button  onClick={() => edit(e.NameOfChapter)} size="small">עריכה</Button>
        <Button onClick={() => navigate(`/episode/${e.NameOfChapter}`)} size="small"> תצוגה</Button>
        <Button onClick={() => remove(e.NameOfChapter)} size="small"> מחיקה</Button>
      </CardActions>
    </Card>
    <br></br>
      <br></br>
            </div>
          );
        })}
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Episodes;
