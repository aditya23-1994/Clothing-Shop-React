import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ childern,isGoogleSignIn, ...otherProps }) => (
    <button 
        className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`}
         {...otherProps}
    >
    {childern}
    </button>
);

export default CustomButton;