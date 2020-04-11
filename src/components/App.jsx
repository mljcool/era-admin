import React, { Fragment } from 'react';
import AppTitle from './AppTitle';
import NavBar from './NavBar';
import ShopList from './pages/ShopList';
import ShopDetails from './pages/ShopDetails';

const App = () => {
    return (
        <Fragment>
            <div className='App container card'>
                <AppTitle />
                <NavBar />
                <div className='container-fluid card-details'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <ShopList />
                        </div>
                        <div className='col-md-8 '>
                            <ShopDetails />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default App;
