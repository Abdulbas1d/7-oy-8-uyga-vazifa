import React from 'react'
import './index.css'
import IconPictureOne from '../../assets/images/icon-left.svg'
import IconPictureTwo from '../../assets/images/icon-right.svg'
import AlbumPictureOne from '../../assets/images/album-one.svg'
import AlbumPictureTwo from '../../assets/images/album-two.svg'
import AlbumPictureThree from '../../assets/images/album-three.svg'
import AlbumPictureFour from '../../assets/images/album-four.svg'
import AlbumPictureFive from '../../assets/images/album-five.svg'
import AlbumPictureSix from '../../assets/images/album-six.svg'
import AlbumPictureSeven from '../../assets/images/album-seven.svg'
import AlbumPictureEight from '../../assets/images/album-eight.svg'
import IconOne from '../../assets/images/icon-one.svg'
import IconTwo from '../../assets/images/icon-two.svg'
import IconThree from '../../assets/images/icon-three.svg'

function Home() {
  return (
    <div>
      <div className='container-home'>
        <div className="icons">
          <button className='btnOne'>
            <img src={IconPictureOne} alt="" />
          </button>

          <button className='btnTwo'>
            <img src={IconPictureTwo} alt="" />
          </button>
        </div>

        <header className="header">
          <h2>Good afternoon</h2>

          <div className="playlist-data">
            <div className="playlist">
              <img src={AlbumPictureOne} alt="" />
              <h4>Chill Mix</h4>
            </div>

            <div className="playlist">
              <img src={AlbumPictureFour} alt="" />
              <h4>Pop Mix</h4>
            </div>

            <div className="playlist">
              <img src={AlbumPictureTwo} alt="" />
              <h4>Daily Mix 1</h4>
            </div>

            <div className="playlist">
              <img src={AlbumPictureFive} alt="" />
              <h4>Daily Mix 5</h4>
            </div>

            <div className="playlist">
              <img src={AlbumPictureThree} alt="" />
              <h4>Folk & Acoustic Mix</h4>
            </div>

            <div className="playlist">
              <img src={AlbumPictureSix} alt="" />
              <h4>Daily Mix 4</h4>
            </div>
          </div>
        </header>
      </div>

      <div className="main">
        <div className="title">
          <h4>Your top mixes</h4>
          <span>SEE ALL</span>
        </div>
        <div className="cards">
          <div className="card">
            <img src={AlbumPictureOne} alt="" />
            <h4>Chill Mix</h4>
            <h6>Julia Wolf, Khalid, ayokay and more</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureFour} alt="" />
            <h4>Pop Mix</h4>
            <h6>Hey Violet, VÉRITÉ, Timeflies and more</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureSeven} alt="" />
            <h4>Pheelz Mix</h4>
            <h6>WizKid, Asake, Tiwa Savage and more</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureEight} alt="" />
            <h4>Indie Mix</h4>
            <h6>Joywave, The xx, The Neighbourhood and...</h6>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="title">
          <h4>Made for you</h4>
          <span>SEE ALL</span>
        </div>
        <div className="cards">
          <div className="card">
            <img src={AlbumPictureThree} alt="" />
            <h4>Folk & Acoustic...</h4>
            <h6>Canyon City, Crooked Still, Gregory Alan...</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureTwo} alt="" />
            <h4>Daily Mix 1</h4>
            <h6>Ayra Starr, Lil Kesh, Ed Sheeran and more</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureFive} alt="" />
            <h4>Daily Mix 5</h4>
            <h6>FRENSHIP, Brooke Sierra, Julia Wolf an...</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureFour} alt="" />
            <h4>Pop Mix</h4>
            <h6>Hey Violet, VÉRITÉ, Timeflies and more</h6>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="title">
          <h4>Recently played</h4>
          <span>SEE ALL</span>
        </div>
        <div className="cards">
          <div className="card">
            <img src={AlbumPictureOne} alt="" />
            <h4>Chill Mix</h4>
            <h6>Julia Wolf, Khalid, ayokay and more</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureFour} alt="" />
            <h4>Pop Mix</h4>
            <h6>Hey Violet, VÉRITÉ, Timeflies and more</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureSeven} alt="" />
            <h4>Pheelz Mix</h4>
            <h6>WizKid, Asake, Tiwa Savage and more</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureEight} alt="" />
            <h4>Indie Mix</h4>
            <h6>Joywave, The xx, The Neighbourhood and...</h6>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="title">
          <h4>Jump back in</h4>
          <span>SEE ALL</span>
        </div>
        <div className="cards">
          <div className="card">
            <img src={AlbumPictureThree} alt="" />
            <h4>Folk & Acoustic...</h4>
            <h6>Canyon City, Crooked Still, Gregory Alan...</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureTwo} alt="" />
            <h4>Daily Mix 1</h4>
            <h6>Ayra Starr, Lil Kesh, Ed Sheeran and more</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureFive} alt="" />
            <h4>Daily Mix 5</h4>
            <h6>FRENSHIP, Brooke Sierra, Julia Wolf an...</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureFour} alt="" />
            <h4>Pop Mix</h4>
            <h6>Hey Violet, VÉRITÉ, Timeflies and more</h6>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="title">
          <h4>Uniquely yours</h4>
          <span>SEE ALL</span>
        </div>
        <div className="cards">
          <div className="card">
            <img src={AlbumPictureOne} alt="" />
            <h4>Chill Mix</h4>
            <h6>Julia Wolf, Khalid, ayokay and more</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureFour} alt="" />
            <h4>Pop Mix</h4>
            <h6>Hey Violet, VÉRITÉ, Timeflies and more</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureSeven} alt="" />
            <h4>Pheelz Mix</h4>
            <h6>WizKid, Asake, Tiwa Savage and more</h6>
          </div>

          <div className="card">
            <img src={AlbumPictureEight} alt="" />
            <h4>Indie Mix</h4>
            <h6>Joywave, The xx, The Neighbourhood and...</h6>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="data">
          <h2>Play It Safe</h2>
          <h6>Julia Wolf</h6>
        </div>

        <div className="top">
          <img src={IconOne} alt="" />
          <img src={IconTwo} alt="" />
          <img src={IconThree} alt="" />
        </div>

        <div className="bottom">
          <h3>02:17</h3>
          <input type="range" />
          <h3>04:40</h3>
        </div>
      </footer>
    </div>
  )
}

export default Home
