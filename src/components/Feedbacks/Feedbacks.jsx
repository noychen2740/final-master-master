import React, { useEffect, useState } from 'react';
import './Feedbacks.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { chapterService } from '../../services/chapter.service';
import { feedbackService } from '../../services/feedback.service';
function Feedbacks() {
  const navigate = useNavigate();

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const remove = async (id) => {
    console.log({ id });
    await feedbackService.remove(id);
    loadFeedbacks();
  };

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
      <div className='title'>  פידבקים מהמשתמשים</div>
      <div className='feedbacks'>
        {feedbacks.map((f) => {
          return (
            <div className='feedback'>

              <div className='feedback-content'>
                <div className="card">
                  <h1 className='Feedback-title2'>{f.FeedbackTitle}</h1>
                  <div className='btns'>
                    <Button
                      className='btn btn-edit'
                      variant='contained'
                      onClick={() => getById(f.FeedbackKey)}
                    >
                      תצוגה
                    </Button>

                    <Button
                      className='btn btn-edit'
                      variant='contained'
                      onClick={() => remove(f.FeedbackKey)}
                    >
                      מחיקה
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Feedbacks;
