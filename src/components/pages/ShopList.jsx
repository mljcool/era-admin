import React, { Fragment } from 'react';

const ShopList = () => {
    const list = [
        {
            id: 1,
            name: 'Sample 1',
        },
        {
            id: 2,
            name: 'Sample 2',
        },
        {
            id: 3,
            name: 'Sample 3',
        },
        {
            id: 4,
            name: 'Sample 4',
        },
        {
            id: 5,
            name: 'Sample 5',
        },
    ];

    return (
        <Fragment>
            <div className='list-group' id='list-tab' role='tablist'>
                {list.map((data) => (
                    <a
                        key={data.id}
                        className='list-group-item list-group-item-action'
                        href='#list-home'
                        role='tab'
                        aria-controls='home'
                    >
                        {data.name}
                    </a>
                ))}
            </div>
        </Fragment>
    );
};

export default ShopList;
