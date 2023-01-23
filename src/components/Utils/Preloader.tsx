import React from 'react';
import preloader from '../../assets/preloader.gif'

export const Preloader = () => {
    return <div style={{display: 'flex',justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
        <img src={preloader} alt="preloader"
             style={{width: '64px', height: '64px'}}/>
        <p style={{color: '#0055FF', fontWeight: '600'}}>Now Loading</p>
    </div>
};