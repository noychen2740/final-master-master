import React from 'react';
import './Header.css';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import LOGO2 from '../../assets/LOGO2.png'
import Navigation from '../Navigation'
function Header() { //לא בשימוש לא להעתיק את הקומפוננטה הזו, אני מפחדת למחוק אותה פשוט
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <header>
        <img className='logo' src={LOGO2}/>
          <ArrowBackIosIcon className={location.pathname==='/'?'hidden':''} onClick={() => navigate(-1)} />
      </header>
      <Outlet />
      <Navigation></Navigation>
    </div>
  );
}

export default Header;
