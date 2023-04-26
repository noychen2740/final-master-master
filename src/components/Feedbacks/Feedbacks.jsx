import React, { useEffect, useState } from 'react';
import './Feedbacks.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { feedbackService } from '../../services/feedback.service';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  jeep from '../../assets/jeep.jpg';
import TopOfAplication from '../TopOfAplication';
import Navigation from '../Navigation';



function Feedbacks() {
  const navigate = useNavigate();

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    loadFeedbacks();
  }, []);

  // const remove = async (id) => {
  //   console.log({ id });
  //   await feedbackService.remove(id);
  //   loadFeedbacks();
  // };

  const getById = (FeedbackKey) => {
    console.log({ FeedbackKey });
    navigate(`/feedback/${FeedbackKey}`);
  };

  const loadFeedbacks = async () => {
    const res = await feedbackService.getAll();
    setFeedbacks(res);
  };

  return (
    <div className='feedbacks-page center'>
      <TopOfAplication label='פיידבקים מהמשתמשים'  />
      {/* <div className='title'>יומן המסע שלי</div> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='feedbacks'>
        {feedbacks.map((f) => (
          <div className='feedback'>
            <div className='feedback-content'>
            <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    src={jeep} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <h1 className='Feedback-title2'>{f.FeedbackTitle}</h1>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    <h1 className='Feedback-title2'>{f.FeedbackDescription}</h1>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => getById(f.FeedbackKey)} size="small">הצגת פידבק </Button>
                    {/* <Button onClick={() => remove(f.FeedbackKey)} size="small">מחיקת פידבק </Button> */}
                  </CardActions>
                </Card>
                <br></br>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Navigation></Navigation>
    </div>
  );
}

export default Feedbacks;
