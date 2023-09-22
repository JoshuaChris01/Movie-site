import specialops from '../src/images/specialops.jpg'
import badboys from '../src/images/badboys.jpg'
import squidgame from '../src/images/squidgame.jpg'
import lockeandkey from '../src/images/locke and key.jpg'
import {AiOutlineDownload} from 'react-icons/ai'
import { BsFillStarFill } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai'
import './App.css';

function ImagesCard() {
    return (
        <div className='card-container'>
            <div className="card">
                <img src={specialops} alt='Special Ops' />
                <div className='card-body'>
                    <h1 className='card-heading'>Special Ops</h1>
                    <div className='tag'>
                        <span className='sci'>Sci-fi</span> 
                        <span className='act'>Action</span>
                        </div>
                    <p className='card-sub'> About movie</p>
                    <p className='card-info'>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi et risus bibendum eleifend.
                        Vivamus sagittis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi et risus bibendum eleifend. Vivamus sagittis,
                    </p>
                    <div className='rating'>
                        <i className='star'> <BsFillStarFill /> </i>
                  <i className='star'><BsFillStarFill /> </i>
                  <i className='star'><BsFillStarFill /> </i>
                  <i className='star'><BsFillStarFill /> </i>
                  <i className='star'><AiOutlineStar /></i>
                    </div>
                    <button className='card-btn'>Download Movie <AiOutlineDownload className='download-icon'/></button>
                </div>
            </div>

            <div className="card">
                <img src={badboys} alt='Special Ops' />
                <div className='card-body'>
                    <h1 className='card-heading'>Bad Boys </h1>
                    <div className='tag'>
                        <span className='sci'>Sci-fi</span> 
                        <span className='act'>Action</span>
                        </div>
                    <p className='card-sub'> About movie</p>
                    <p className='card-info'>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi et risus bibendum eleifend.
                        Vivamus sagittis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi et risus bibendum eleifend. Vivamus sagittis,
                    </p>
                    <div className='rating'>
                        <i className='star'> <BsFillStarFill /> </i>
                  <i className='star'><BsFillStarFill /> </i>
                  <i className='star'><BsFillStarFill /> </i>
                  <i className='star'><BsFillStarFill /> </i>
                  <i className='star'><AiOutlineStar /></i>
                    </div>
                    <button className='card-btn'>Download Movie <AiOutlineDownload className='download-icon'/></button>
                </div>
            </div>

            <div className="card">
                <img src={squidgame} alt='Special Ops' />
                <div className='card-body'>
                    <h1 className='card-heading'>Squid Game</h1>
                    <div className='tag'>
                        <span className='sci'>Sci-fi</span> 
                        <span className='act'>Action</span>
                        </div>
                    <p className='card-sub'> About movie</p>
                    <p className='card-info'>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi et risus bibendum eleifend.
                        Vivamus sagittis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi et risus bibendum eleifend. Vivamus sagittis,
                    </p>
                    <div className='rating'>
                        <i className='star'> <BsFillStarFill /> </i>
                  <i className='star'><BsFillStarFill /> </i>
                  <i className='star'><BsFillStarFill /> </i>
                  <i className='star'><BsFillStarFill /> </i>
                  <i className='star'><AiOutlineStar /></i>
                    </div>
                    <button className='card-btn'>Download Movie <AiOutlineDownload className='download-icon'/></button>
                </div>
            </div>

            <div className="card">
                <img src={lockeandkey} alt='Special Ops' />
                <div className='card-body'>
                    <h2 className='card-heading'>Locke And Key</h2>
                    <div className='tag'>
                        <span className='sci'>Sci-fi</span> 
                        <span className='act'>Action</span>
                        </div>
                    <p className='card-sub'> About movie</p>
                    <p className='card-info'>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi et risus bibendum eleifend.
                        Vivamus sagittis,cing elit. Proin id nisi et risus bibendum eleifend. Vivamus sagittis,
                    </p>
                    <div className='rating'>
                        <i className='star'> <BsFillStarFill /> </i>
                  <i className='star'><BsFillStarFill /> </i>
                  <i className='star'><BsFillStarFill /> </i>
                  <i className='star'><BsFillStarFill /> </i>
                  <i className='star'><AiOutlineStar /></i>
                    </div>
                    <button className='card-btn'>Download Movie <AiOutlineDownload className='download-icon'/></button>
                </div>
            </div>
        </div>
    )
}

export default ImagesCard