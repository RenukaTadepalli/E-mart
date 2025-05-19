import React, { useContext } from 'react';
import "./Header.css";
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../SearchContext/SearchContext';

const Header = () => {
  const { setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='emart-page'>
      <h3 onClick={() => navigate("/")} className='emart-page-title'>E-MART</h3>
      <input type='text' placeholder='Search Here..' onChange={handleSearch} />
      <Link to={"/login"} className='emart-page-login'>SignUp/Login</Link>
    </div>
  );
};

export default Header;
