import React from 'react';
import './Header.css';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <header>
        <img className='logo' src={logo} />
          <ArrowBackIosIcon className={location.pathname==='/'?'hidden':''} onClick={() => navigate(-1)} />
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
