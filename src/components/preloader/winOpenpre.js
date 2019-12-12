import React, { useState, useEffect } from 'react';
// import Preload from './oldmoviePre';
import './winOpenPre.css';

const WinOpenpre = (props) => {
    const [change, setChange] = useState('')
    useEffect(() => {
        setTimeout(() => {
            setChange('preloader complete')
        }, 2000)
    })

    var className = change !== '' ? 'preloader complete' : "preloader"

    return (
            <div className="body">
                <div className={className}>
                    <div className="earth"></div>
                </div>
            </div>
    )
}

export default WinOpenpre
