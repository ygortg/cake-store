import React from "react";
import {Link} from 'react-router-dom';
import './style.css';

export default function Header() {
  return(
    <header>
      <div className="wrap topo">
        <img className="logo" src="assets/logo2.png" alt="logo Gelateria"/>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/sabores'>Sabores</Link>
          <Link to='/info'>Sobre</Link>
        </nav>
      </div>
    </header>
  );
}