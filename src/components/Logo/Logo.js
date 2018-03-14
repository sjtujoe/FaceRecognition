import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import site_logo from './Logo.png'

const Logo = () => {
	return (
		<div className='ma4 mt0'>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
		<div className="Tilt-inner">
		<img style={{paddingTop: '5px'}} alt='logo' src={site_logo}/>
		</div>
		</Tilt>
		</div>
		);
}

export default Logo;




