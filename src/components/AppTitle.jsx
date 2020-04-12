import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../context/userContext';

const AppTitle = () => {
    const { setloginState } = useContext(UserContext);
    const [toLogin, setToLogin] = useState(false);

    return (
        <div className='title-page'>
            <h3>ERA Super Admin</h3>
            <button
                type='button'
                className='btn btn-primary'
                title='Logout'
                onClick={() => {
                    setToLogin(true);
                    setTimeout(() => {
                        localStorage.removeItem('isLogin');
                        setloginState(false);
                    }, 1000);
                }}
            >
                {toLogin ? (
                    <div className='spinner-border' role='status'>
                        <span className='sr-only'>Loading...</span>
                    </div>
                ) : (
                    <FontAwesomeIcon icon={faPowerOff} />
                )}
            </button>
        </div>
    );
};

export default AppTitle;
