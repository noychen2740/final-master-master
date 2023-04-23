import React from 'react';
import './Diary.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
function Diary() {
  const navigate = useNavigate();

  return (
    <div className='diary center'>
      <div className='title'>יומן המסע שלי</div>
      <div className='desc'>
        יומן מסע הינו כלי המאפשר לכם לתעד פרקים בטיול שלכם. בכל פרק תתארו את
        החוויה שעברתם ביעד ואף תוכלו לצרף תמונות. בלחיצה על "שמור פרק" הפרק ישמר
        בזיכרון האפליקציה ותוכלו לשתף אותו עם משתמשים אחרים. בסיום הטיול אוסף
        הפרקים ששמרתם יקווצו ליומן המסע ובו כל הרגעים היפים מהטיול הגדול
      </div>
      <img className='book-image' src='book.png'></img>
      <div className='btns'>
        <Button
          className='btn btn-create'
          variant='contained'
          onClick={() => navigate('/create-episode')}
        >
          צור פרק
        </Button>
        <Button
          className='btn btn-show'
          variant='contained'
          onClick={() => navigate('/episodes')}
        >
          הצג את הפרקים שלי
        </Button>
      </div>
    </div>
  );
}

export default Diary;
