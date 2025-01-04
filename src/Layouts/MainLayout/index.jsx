import React from 'react'
import './index.css'
import LeftBar from '../../components/LeftBar'
import RightBar from '../../components/RightBar'

function MainLayout({ children }) {
    return (
        <div className='container-bar'>
            <div className="left-bar">
                <LeftBar />
            </div>

            <main className="main-bar">
                {children}
            </main>

            <div className="right-bar">
                <RightBar />
            </div>
        </div>
    )
}

export default MainLayout
