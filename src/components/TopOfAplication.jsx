import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { Button } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { Link, Outlet, useLocation } from 'react-router-dom';

function TopOfAplication(props) {
    const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
    <AppBar  position="fixed" sx={{ bgcolor: '#598e89', width:'100%', height: '70px' }}  > 
    {/* <Button onClick={()=>{props.continueClicked('secondQues')}}> 
      <ArrowBackIosNew style={{color:'white' ,position:'absolute' ,margin:'0', top:20, right: 310 }}/>
      </Button> */}
      <Container maxWidth="xs" > 
        <Toolbar >
              <IconButton style={{marginRight:'auto', marginLeft:'auto'}} >
                {/* <Avatar alt="טיול אחרי צבא"  src="logo.png" /> */}
              </IconButton>
                <Typography
              sx={{
              mr: 0,
              fontFamily: 'Arial',
              fontSize:'large',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              position:'fixed'
              // display: { xs:'flex'},
              // flexGrow: 1,
               }}
              >
               </Typography>
              <span style={{marginLeft:'35px', marginRight:'35px'}} >{props.label}</span>
              <IconButton style={{marginRight:'auto', marginLeft:'auto'}}  sx={{ p: 0 }}>
                <Avatar src="/broken-image.jpg" variant="rounded" style={{borderRadius: '40%'}} sx={{mt: 1}} />
              </IconButton>
              <ArrowBackIosIcon className={location.pathname==='/'?'hidden':''} onClick={() => navigate(-1)} />
        </Toolbar>
      </Container>
    </AppBar>
    </>);
}
export default TopOfAplication;
