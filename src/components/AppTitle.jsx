import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

const AppTitle = () => {
    return (
        <div className='title-page'>
            <h3>ERA Super Admin</h3>
            <button type='button' className='btn btn-primary' title='Logout'>
                <FontAwesomeIcon icon={faPowerOff} />
            </button>
        </div>
    );
};

export default AppTitle;
