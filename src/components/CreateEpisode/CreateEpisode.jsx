import React, { useEffect, useState } from 'react';
import './CreateEpisode.css';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { chapterService } from '../../services/chapter.service';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Card } from '@mui/material';

function CreateEpisode() {
  const [form, setForm] = useState();
  const { NameOfChapter } = useParams();
  const navigate = useNavigate();

  const submit = async (ev) => {
    ev.preventDefault();
    console.log({ form });
    form.ChapterDate = new Date(form.ChapterDate).toLocaleDateString('en-us')
    if (NameOfChapter) {
      const res = await chapterService.update(form);
    } else {
      const res = await chapterService.create(form);
    }
    navigate('/episodes');
  };

  const handleChange = (ev) => {
    let { name, value } = ev.target;

    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (NameOfChapter) {
      loadEpisode();
    }
  }, []);

  const loadEpisode = async () => {
    const data = await chapterService.getById(NameOfChapter);
    setForm(data);
  };
  return (
    <div className='create-episode'>
      <div className='container center'>
        <div className='title'>יצירת/עדכון פרק חדש</div>
        <form onSubmit={submit} >
          <div className='input-container'>
            <label>כותרת</label>
            <TextField fullWidth  name='NameOfChapter' id="fullWidthName" cols='50'
              rows='10' onInput={handleChange}
              value={form?.NameOfChapter} />
          </div>

          <div className='input-container'>
            <label>תאריך</label>
            <input
              type='date'
              name='ChapterDate'
              onChange={handleChange}
              value={form?.ChapterDate}
            />
          </div>
          <div className='input-container'>

            <label>שעה</label>
            <input
              type='time'
              name='ChapterTime'
              onChange={handleChange}
              value={form?.ChapterTime}
            />
          </div>
          <div className='input-container'>
            <label>תיאור</label>
            <br></br>
            <TextField name='ChapterDescription' fullWidth  id="fullWidth" cols='50'
              rows='10' onInput={handleChange}
              value={form?.ChapterDescription} />
          </div>
          <div className='input-container'>
            <label>תמונה</label>
            <input type='file'></input>
          </div>
          <Button
            className='btn btn-create'
            variant='contained'
            onClick={submit}
          >
             שמור פרק
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default CreateEpisode;
