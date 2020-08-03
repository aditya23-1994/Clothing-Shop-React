import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ 
    childern,
    isGoogleSignIn,
     inverted,
      ...otherProps 
    }) => (
    <button 
        className= {
            `${inverted ? 'inverted':''
        }
         custom-button`
        }
         {...otherProps}
    >
    {childern}
    </button>
);

export default CustomButton;