import React from 'react'
import './index.css'
import PlusIconPicture from '../../assets/images/plus-human-icon.svg'
import ExitIconPicture from '../../assets/images/exit-icon.svg'
import HumanIconPicture from '../../assets/images/human.svg'
import UnionIconPicture from '../../assets/images/Union.svg'

function RightBar() {
  return (
    <div className='container-rightBar'>
      <div className="top">
        <h3 className='friend'>Friend Activity</h3>
        <img className='one' src={PlusIconPicture} alt="" />
        <img className='two' src={ExitIconPicture} alt="" />
      </div>

      <p className='text-rigtbar'>Let friends and followers on Spotify see what you’re listening to.</p>

      <div className="humans">
        <div className="human">
            <img src={HumanIconPicture} alt="" />
            <img src={UnionIconPicture} alt="" />
        </div>

        <div className="human">
            <img src={HumanIconPicture} alt="" />
            <img src={UnionIconPicture} alt="" />
        </div>

        <div className="human">
            <img src={HumanIconPicture} alt="" />
            <img src={UnionIconPicture} alt="" />
        </div>
      </div>

      <p className="text-two">Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>

      <button className="buttonRight">SETTINGS</button>
    </div>
  )
}

export default RightBar
