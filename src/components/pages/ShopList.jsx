import React, { Fragment, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../context/userContext';
import Badge from './Badge';

const ShopList = () => {
    const { shopsList, selectedShop, setSelectedShops } = useContext(
        UserContext
    );

    const creatNewDate = (date) => {
            

        return new Date(date);
    }
    return (
        <Fragment>
          
            <div className='list-group' id='list-tab' role='tablist'>
                {shopsList.map((data) => (
                    
                    <a
                        key={data.uid}
                        className='list-group-item '
                        href='#list-home'
                        role='tab'
                        aria-controls='home'
                        onClick={() => {
                            setSelectedShops(data);
                        }}
                        style={
                            data.uid === selectedShop.uid
                                ? { background: '#d4d4d4' }
                                : {}
                        }
                    >
                        <small className='shop-date'>{data.dateCreated.toDate().toDateString()}</small>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='title-list'>
                                <FontAwesomeIcon icon={faCar} />
                                <span className='shop-name'>
                                    {data.name}
                                </span>
                            </div>
                            <Badge status={data.status} />
                        </div>
                    </a>
                ))}
            </div>
        </Fragment>
    );
};

export default ShopList;
