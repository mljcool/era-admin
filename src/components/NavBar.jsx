/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faListUl,
    faHourglass,
    faTimes,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../context/userContext';

const NavBar = ({ getSearch }) => {
    const { setSearchShop } = useContext(UserContext);

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand' href='#'></a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
            >
                <ul className='navbar-nav mr-auto  '>
                    <div
                        className='btn-group mr-2'
                        role='group'
                        aria-label='First group'
                    >
                        <button type='button' className='btn btn-secondary'>
                            <FontAwesomeIcon icon={faListUl} />
                            &nbsp; All List
                        </button>
                        <button type='button' className='btn btn-secondary'>
                            <FontAwesomeIcon icon={faHourglass} />
                            &nbsp;Pendings
                        </button>
                        <button type='button' className='btn btn-secondary'>
                            <FontAwesomeIcon icon={faTimes} />
                            &nbsp;Rejected
                        </button>
                        <button type='button' className='btn btn-secondary'>
                            <FontAwesomeIcon icon={faCheck} />
                            &nbsp;Accepted
                        </button>
                    </div>
                </ul>
                <form className='form-inline my-2 my-lg-0'>
                    <input
                        className='form-control mr-sm-2'
                        type='search'
                        placeholder='Search a car shops'
                        aria-label='Search'
                        name='search'
                        onKeyUp={(e) => {
                            e.preventDefault();
                            setSearchShop(e.target.value);
                            getSearch();
                        }}
                    />
                    <button
                        className='btn btn-outline-primary my-2 my-sm-0'
                        type='button'
                        onClick={() => {
                            getSearch();
                        }}
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default NavBar;
