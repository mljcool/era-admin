import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faTimes,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import firebase from '../../config/firebaseConfig';
import { UserContext } from '../../context/userContext';
import GoogleMaps from '../GoogleMaps';
import Badge from './Badge';

const ShopDetails = () => {
    const { selectedShop } = useContext(UserContext);

    const updateStatus = (id, statuses) => {
        firebase
            .firestore()
            .collection('newShopList')
            .doc(id)
            .update({
                status: statuses,
            })
            .then(() => {});
    };

    return (
        <div className='card main-details'>
            <div className='card-header'>
                <span>
                    Shop Details: <b>({selectedShop.name || ''})</b>
                </span>
                <Badge status={selectedShop.status} />
            </div>
            <div className='card-body'>
                {/* <pre>
                    {JSON.stringify(
                        (selectedShop.functionalLocation || {}).longitude || '',
                        null,
                        2
                    )}
                </pre> */}
                <div className='row'>
                    <div className='col-md-12 '>
                        <form className='needs-validation'>
                            <div className='row'>
                                <div className='col-md-6 mb-3'>
                                    <label htmlFor='firstName'>Main name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='firstName'
                                        placeholder=''
                                        value={selectedShop.name || ''}
                                        readOnly
                                    />
                                    <div className='invalid-feedback'>
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className='col-md-6 mb-3'>
                                    <label htmlFor='lastName'>
                                        Secondary name
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='lastName'
                                        placeholder=''
                                        value={selectedShop.secondName || ''}
                                        readOnly
                                    />
                                    <div className='invalid-feedback'>
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-6 mb-3'>
                                    <label htmlFor='firstName'>
                                        Mobile Contact
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='firstName'
                                        placeholder=''
                                        value={selectedShop.mobile || ''}
                                        readOnly
                                    />
                                </div>
                                <div className='col-md-6 mb-3'>
                                    <label htmlFor='lastName'>
                                        Phone name
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='lastName'
                                        placeholder=''
                                        value={
                                            selectedShop.phone || ''
                                        }
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-6 mb-3'>
                                    <label htmlFor='email'>
                                        Email
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='email'
                                        placeholder=''
                                        value={selectedShop.email || ''}
                                        readOnly
                                    />
                                </div>
                                <div className='col-md-6 mb-3'>
                                    <label htmlFor='lastName'>
                                        Link
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='lastName'
                                        placeholder=''
                                        value={
                                            selectedShop.domain || ''
                                        }
                                        readOnly
                                    />
                                </div>
                            </div>

                            
                            <div className='mb-3'>
                                <div className='col-md-12 mb-6'>
                                    <label htmlFor='firstName'>
                                        Established
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='firstName'
                                        placeholder=''
                                        value={selectedShop.founded || ''}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className='mb-3'>
                                <div className='input-group'>
                                    <div className='input-group-prepend'>
                                        <span className='input-group-text'>
                                            Notes
                                        </span>
                                    </div>
                                    <textarea
                                        className='form-control'
                                        aria-label='With textarea'
                                        value={
                                            selectedShop.notes || ''
                                        }
                                        readOnly
                                    ></textarea>
                                </div>
                            </div>


                            <div className='mb-3'>
                                <div className='input-group'>
                                    <div className='input-group-prepend'>
                                        <span className='input-group-text'>
                                            Address
                                        </span>
                                    </div>
                                    <textarea
                                        className='form-control'
                                        aria-label='With textarea'
                                        value={
                                            selectedShop.address || ''
                                        }
                                        readOnly
                                    ></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3 toggle-map'>
                        <a
                            className='btn btn-primary btn-sm'
                            data-toggle='collapse'
                            href='#multiCollapseExample1'
                            role='button'
                            aria-expanded='false'
                            aria-controls='multiCollapseExample1'
                        >
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            &nbsp;<span>View Map</span>
                        </a>
                    </div>

                    <div className='col-md-9'>
                        <div
                            className='collapse multi-collapse'
                            id='multiCollapseExample1'
                        >
                            <div className='card card-body '>
                                <GoogleMaps selectedShopData={selectedShop} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='row'>
                    <div className='col-md-12 button-footers'>
                        <a
                            href='#sample'
                            className='btn btn-danger'
                            onClick={() => {
                                updateStatus(selectedShop.id, 'REJECTED');
                            }}
                        >
                            <FontAwesomeIcon icon={faTimes} /> Reject
                        </a>
                        <a
                            href='#sample'
                            className='btn btn-success'
                            onClick={() => {
                                updateStatus(selectedShop.id, 'ACCEPTED');
                            }}
                        >
                            <FontAwesomeIcon icon={faCheck} /> Accept
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetails;
