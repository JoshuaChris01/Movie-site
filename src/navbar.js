import { BsTelegram } from 'react-icons/bs'
import { BsFillStarFill } from 'react-icons/bs';
import badboys from '../src/badboys.jpg'
import './App.css';
import specialops from '../src/specialops.jpg';
import squidgame from '../src/squidgame.jpg'
import lockeAndKey from '../src/locke and key.jpg'
import { AiOutlineStar } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'

export default function NavBar() {
const [isOpen, setIsOpen] = useState(false)
    return (
    
        <header>
        <div className='nav-bar'>
          <div className='logo'> <a href='imovies'>iMovies</a></div>
          <div className='search-box'>
          <input className='search-text' type='text' placeholder='Quick Search'></input>
          </div>
          <ul className='links'>
            <li><a href='home'>Home</a></li>
            <li><a href='trendting'>Trending</a></li>
            <li><a href='browse'>Browse Movies</a></li>
            <li><a href='about'>About</a></li>
          </ul>
          <a href='started' className='get-started'>Get Started</a>
          <div className='menu-button' onClick={(e) => setIsOpen(!isOpen)}> { !isOpen ? <FaBars /> : <AiOutlineClose />}</div>
        </div>
    {isOpen && (
       <div className='dropdown-menu open'>
       <li><a href='home'>Home</a></li>
         <li><a href='trending'>Trending</a></li>
         <li><a href='browse'>Browse Movies</a></li>
         <li><a href='about'>About</a></li>
         <li> <a href='started' className='get-started'>Get Started</a> </li>
       </div>
    )}
      </header>
    )
}