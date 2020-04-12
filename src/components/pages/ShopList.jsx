import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

const ShopList = () => {
    const list = [
        {
            id: 1,
            name: 'Sample Shop 1',
        },
        {
            id: 2,
            name: 'Sample Shop 2',
        },
        {
            id: 3,
            name: 'Sample Shop 3',
        },
        {
            id: 4,
            name: 'Sample Shop 4',
        },
        {
            id: 5,
            name: 'Sample Shop 5',
        },
    ];

    return (
        <Fragment>
            <div className='list-group' id='list-tab' role='tablist'>
                {list.map((data) => (
                    <a
                        key={data.id}
                        className='list-group-item'
                        href='#list-home'
                        role='tab'
                        aria-controls='home'
                    >
                        <small className='shop-date'>Monday 20, 2019</small>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='title-list'>
                                <FontAwesomeIcon icon={faCar} />
                                <span className='shop-name'>{data.name}</span>
                            </div>
                            <span className='badge badge-primary'>Pending</span>
                        </div>
                    </a>
                ))}
            </div>
        </Fragment>
    );
};

export default ShopList;
