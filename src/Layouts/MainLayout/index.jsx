import React from 'react'
import './index.css'

function MainLayout({ children }) {
    return (
        <div className='container-bar'>
            <div className="left-bar">

            </div>

            <main className="main-bar">
                {children}
            </main>

            <div className="right-bar"></div>
        </div>
    )
}

export default MainLayout
