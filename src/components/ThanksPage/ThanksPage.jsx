import React from 'react'
import './ThanksPage.css'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import  manthanks from '../../assets/manthanks.png'
import  thanks from '../../assets/thanks.png'
function ThanksPage() {
    const navigate = useNavigate();
  return (
    <div>
        <div className='thanks center'>
      <div className='title'>תודה רבה !</div>
      <img className='book-image' src={manthanks}></img>
      <div className='desc'>
        הצוות שלנו בודק את הצעתכם... נחזור בקרוב עם תשובה
      </div>
      <img className='book-image' src={thanks}></img>
      <Button
          className='btn btn-create'
          variant='contained'
          onClick={() => navigate('/create-feedback')}
        >חזרה ליצירת פיידבק</Button>
    </div>
    </div>
  )
}

export default ThanksPage