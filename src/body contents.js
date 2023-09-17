import { BsTelegram } from 'react-icons/bs'
import { BsFillStarFill } from 'react-icons/bs';
import {RiTwitterXFill} from 'react-icons/ri'
import './App.css';

function BodyContents() {
    return(
       
        <div className='div-text'>
          <h1 className='heading-two'>Download Latest Movies: HD smallest size </h1>
          <br />
          <div className='paragraphs'>
            <p className='paragraph1'> 
            Welcome to the official iMovies website. Here you can browse and download Latest movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. Movies Torrents.
            </p>
            <p className='paragraph2'>
                IMPORTANT - <span>iMovies</span> is the only new official domain for HQ Movies
                </p>
            <p className='link-para'> <a href='telegram'> <BsTelegram className='telegram-icon' />iMOVIES_UPDATES | <RiTwitterXFill className='X'/> Up coming movies: BOSS BABY 2023. Join my telegram channel now</a></p>
            <p className='popular-downloads'> <BsFillStarFill className='star' /> Popular Downloads</p>
            <hr />
          </div>
        </div>

    )
}

export default BodyContents