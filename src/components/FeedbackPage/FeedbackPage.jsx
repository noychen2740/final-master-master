import React, { useEffect, useState } from 'react'
import './FeedbackPage.css'
import { feedbackService } from '../../services/feedback.service';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  jeep from '../../assets/jeep.jpg'


function FeedbackPage() {
  const [feedback, setFeedback] = useState(null);
  const { FeedbackKey } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (FeedbackKey) {
      loadFeedback();
    }
  }, []);

  const loadFeedback = async () => {
    const data = await feedbackService.getById(FeedbackKey);
    setFeedback(data);
  };

  const remove = async (id) => {
    console.log({ id });
    await feedbackService.remove(feedback.FeedbackKey);
    navigate('/feedbacks')
  };

  const submit = async () => {
    console.log();
    const res = await feedbackService.create(feedback)
  await  feedbackService.remove(feedback.FeedbackKey)
    navigate('/feedbacks')
  }
  return feedback ? (
    <div className='feedbackpage'>
      <Card sx={{ maxWidth: 345 }}>
                  {/* <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    src={jeep} /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <div className="title"> {feedback.FeedbackTitle}</div>
                    <div>שם המדינה : {feedback.FeedbackCountry}</div>
                    <div>איזור במדינה : {feedback.FeedbackRegionOfTheCountry}</div>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    <div>תיאור מהמשתמש : {feedback.FeedbackDescription}</div>
                    <div>סוג הפיידבק : {feedback.KindOfFeedback}</div>
                    <div>נקודת ציון של הפיידבק : </div>
                    <div>FeedbackLongitude : {feedback.FeedbackLongitude}</div>
                    <br></br>
                    <div>FeedbackLatitude : {feedback.FeedbackLatitude}</div>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={submit} size="small">הוספת פידבק </Button>
                    <Button onClick={() => remove(feedback.FeedbackKey)} size="small">מחיקת פידבק </Button>
                  </CardActions>
                </Card>
    </div>
  ) : <div className="loading">
    loading...
  </div>
}

export default FeedbackPage