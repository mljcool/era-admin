import React from 'react';

const ShopDetails = () => {
    return (
        <div className='card main-details'>
            <div className='card-header'>
                <span>Shop Details</span>
                <span className='badge badge-primary'>Pending</span>
            </div>
            <div className='card-body'>
                <h5 className='card-title'>Special title treatment</h5>
                <p className='card-text'>
                    With supporting text below as a natural lead-in to
                    additional content.
                </p>
                <a href='#sample' className='btn btn-primary'>
                    Go somewhere
                </a>
            </div>
        </div>
    );
};

export default ShopDetails;
