import React, { memo } from 'react';
import styles from './styles.module.scss';

const Button = ({ children, onClick, style }) => {
    return (
        <button 
            className={styles.button}   
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    );
};

export default memo(Button);