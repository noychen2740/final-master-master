import React, { useEffect, useState } from 'react';
import './EpisodePage.css';
import { useNavigate, useParams } from 'react-router-dom';
import { chapterService } from '../../services/chapter.service';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TopOfAplication from '../TopOfAplication';
import Navigation from '../Navigation';




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
      <TopOfAplication label={NameOfChapter}  />
      {/* <div className='title'>יומן המסע שלי</div> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
<div className="container ">
<Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <div className='episode-time'>

<div className='episode-date'> {new Date(episode.ChapterDate).toLocaleDateString('en-us')} </div>
<div className='episode-hour'>{episode.ChapterTime}</div>
</div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <div className='episode-title'>{episode.NameOfChapter}</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <div className='episode-content'>
        <div className='episode-desc'>{episode.ChapterDescription}</div>
        <img className='episode-img' src={episode.ChapterPictures} alt='' />
      </div>
        </Typography>
      </CardContent>
    </Card>
<br></br>
<br></br>
<br></br>
      </div>
      <Navigation></Navigation>
    </div>
  ) : (
    <div className='loading'>loading...</div>
  );
}

export default EpisodePage;
