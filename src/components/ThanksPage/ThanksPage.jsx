import React from 'react'
import './ThanksPage.css'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import  manthanks from '../../assets/manthanks.png'
import  thanks from '../../assets/thanks.png';
import TopOfAplication from '../TopOfAplication';
import Navigation from '../Navigation';
function ThanksPage() {
    const navigate = useNavigate();
  return ( //דף תודה רבה לאחר הוספת פיידבק מהמשתמש
    <div>
        <div className='thanks center'>
        <TopOfAplication label='תודה רבה!'  />
      {/* <div className='title'>יומן המסע שלי</div> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
        <br></br>
        <br></br>
        <br></br>
    </div>
    <Navigation></Navigation>
    </div>
  )
}

export default ThanksPage