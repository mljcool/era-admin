/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const NavBar = () => {
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
                            All List
                        </button>
                        <button type='button' className='btn btn-secondary'>
                            Pendings
                        </button>
                        <button type='button' className='btn btn-secondary'>
                            Archived
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
                    />
                    <button
                        className='btn btn-outline-primary my-2 my-sm-0'
                        type='submit'
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default NavBar;
