import './menu-item.styles.scss';

import React from 'react';

const MenuItem = ({ title, imageUrl, id, size }) => {
	return (
		<div className={`${size} menu-item`}>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>Shop now</span>
			</div>
		</div>
	);
};

export default MenuItem;
