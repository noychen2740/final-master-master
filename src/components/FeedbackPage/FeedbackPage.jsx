import React, { useEffect, useState } from 'react'
import './FeedbackPage.css'
import { feedbackService } from '../../services/feedback.service';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

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


  const submit = async () => {
    console.log();
    const res = await feedbackService.create(feedback)
  await  feedbackService.remove(feedback.FeedbackKey)
    navigate('/feedbacks')
  }
  return feedback ? (
    <div className='card feedbackpage'>
      <div className="title"> {feedback.FeedbackTitle}</div>
      <br></br>
      <div>שם המדינה : {feedback.FeedbackCountry}</div>
      <br></br>
      <div>איזור במדינה : {feedback.FeedbackRegionOfTheCountry}</div>
      <br></br>
      <div>תיאור מהמשתמש : {feedback.FeedbackDescription}</div>
      <br></br>
      <div>סוג הפיידבק : {feedback.KindOfFeedback}</div>
      <br></br>
      <div>נקודת ציון של הפיידבק : </div>
      <br></br>
      <div>FeedbackLongitude : {feedback.FeedbackLongitude}</div>
      <br></br>
      <div>FeedbackLatitude : {feedback.FeedbackLatitude}</div>
      <br></br>
      <Button
        className='btn btn-create'
        variant='contained'
        onClick={submit}
      >
        הוספה
      </Button>
    </div>
  ) : <div className="loading">
    loading...
  </div>
}

export default FeedbackPage