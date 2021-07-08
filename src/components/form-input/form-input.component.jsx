import './form-input.styles.scss';

import React from 'react';

const FormInput = ({ handleChange, label, ...otherprops }) => {
	return (
		<div className='group'>
			<input className='form-input' onChange={handleChange} {...otherprops} />
			{label ? (
				<label className={`${otherprops.value.length ? 'shrink' : ''} form-input-label `}>{label}</label>
			) : null}
		</div>
	);
};

export default FormInput;
