import React, { useEffect, useState } from 'react';
import './CreateFeedback.css';
import { Button, FormControl, MenuItem, Select } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { feedbackService } from '../../services/feedback.service';
import { TextField } from '@mui/material';

function CreateFeedback() {
  const [form, setForm] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const submit = async (ev) => {
    ev.preventDefault();
    const res = await feedbackService.createfromuser(form);
    navigate('/thanks');
  };

  const handleChange = (ev) => {
    let { name, value } = ev.target;

    setForm({ ...form, [name]: value }); 
  };

  return (
    <div className='create-episode'>
      <div className='container center'>
        <div className='title'>  יצירת פידבק</div>
        <form onSubmit={submit}>
          <div className='input-container'>
            <label>כותרת</label>
            <br></br>
            <TextField name='FeedbackTitle' fullWidth id="fullWidth" cols='50'
              rows='2' onInput={handleChange}
              value={form?.FeedbackTitle} />
          </div>
          <div className='input-container'>
            <label>תיאור</label>
            <br></br>
            <TextField name='FeedbackDescription' fullWidth id="fullWidth" cols='50'
              rows='2' onInput={handleChange}    multiline={true} 
              value={form?.FeedbackDescription} />
          </div>
          <div className='input-container'>
            <label>שם המדינה</label>
            <br></br>
            <TextField name='FeedbackCountry' fullWidth id="fullWidth" cols='50'
              rows='10' onInput={handleChange}
              value={form?.FeedbackCountry} />
          </div>
          <div className='input-container'>
            <label>איזור במדינה </label>
            <br></br>
            <TextField name='FeedbackRegionOfTheCountry' fullWidth id="fullWidth" cols='50'
              rows='10' onInput={handleChange}
              value={form?.FeedbackRegionOfTheCountry} />
          </div>
          <FormControl fullWidth>
          <label>סוג</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={form?.KindOfFeedback}
              label="Age"
              name='KindOfFeedback'
              fullWidth
              onChange={handleChange}
            >
              <MenuItem value={"Attractions"}>Attractions</MenuItem>
              <MenuItem value={"Trips"}>Trips</MenuItem>
              <MenuItem value={"SleepingComplexes"}>SleepingComplexes</MenuItem>
              <MenuItem value={"AidComplexes"}>AidComplexes</MenuItem>
            </Select>
          </FormControl>

          <div className="seperator"></div>
          <div className='input-container'>
            <label>נקודת ציון </label>
            <br></br>
            <TextField name='FeedbackLongitude' fullWidth id="fullWidth" cols='50'
              rows='10' onInput={handleChange}
              value={form?.FeedbackLongitude} />
          </div>
          <div className='input-container'>
            <label>נקודות ציון</label>
            <br></br>
            <TextField name='FeedbackLatitude' fullWidth id="fullWidth" cols='50'
              rows='10' onInput={handleChange}
              value={form?.FeedbackLatitude} />
          </div>


          <Button
            className='btn btn-create'
            variant='contained'
            onClick={submit}
          >
            שמור
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateFeedback;
