import React from 'react'
import './index.css'
import HomeIconPicture from '../../assets/images/home-icon.svg'
import SearchIconPicture from '../../assets/images/search-icon.svg'
import LibraryIconPicture from '../../assets/images/library-icon.svg'
import CreateIconPicture from '../../assets/images/create-icon.svg'
import LikeIconPicture from '../../assets/images/like-icon.svg'
import { NavLink } from 'react-router-dom'

function LeftBar() {
  return (
    <div className='container-leftBar'>
      <div className="links">
        <NavLink className="homelink" to="/">
          <img src={HomeIconPicture} alt="" />
          <span className='home'>Home</span>
        </NavLink>
        <div className="search">
          <img src={SearchIconPicture} alt="" />
          <h4 className='searche'>Search</h4>
        </div>
        <div className="library">
          <img src={LibraryIconPicture} alt="" />
          <h4 className='librarye'>Your Library</h4>
        </div>

        <div className="link">
          <div className="create">
            <img src={CreateIconPicture} alt="" />
            <h4 className='create'>Create Playlist</h4>
          </div>
          <NavLink className='like' to="/like">
            <img src={LikeIconPicture} alt="" />
            <span className='likes'>Liked Songs</span>
          </NavLink>
        </div>

        <hr className='hr' />
      </div>

      <div className="playlists">
        <a href="/">Chill Mix</a>
        <a href="/">Insta Hits</a>
        <a href="/">Your Top Songs 2021</a>
        <a href="/">Mellow Songs</a>
        <a href="/">Anime Lofi & Chillhop Music</a>
        <a href="/">BG Afro “Select” Vibes</a>
        <a href="/">Afro “Select” Vibes</a>
        <a href="/">Happy Hits!</a>
        <a href="/">Deep Focus</a>
        <a href="/">Instrumental Study</a>
        <a href="/">OST Compilations</a>
        <a href="/">Nostalgia for old souled mill...</a>
        <a href="/">Mixed Feelings</a>
      </div>
    </div>
  )
}

export default LeftBar
