import React, { Fragment, useState, useEffect } from 'react';
import AppTitle from './AppTitle';
import NavBar from './NavBar';
import ShopList from './pages/ShopList';
import ShopDetails from './pages/ShopDetails';
import Login from './pages/Login';
import { UserContext } from '../context/userContext';
import { shops } from '../constants/dummyShop';
const App = () => {
    const [loginState, setloginState] = useState(false);
    const [shopsList, setShops] = useState([]);
    const [selectedShop, setSelectedShops] = useState({});

    useEffect(() => {
        setloginState(localStorage.getItem('isLogin'));
        (async () => {
            const allShop = await shops();
            setShops(allShop);
            setSelectedShops(allShop[0]);
        })();
    }, []);
    return (
        <Fragment>
            <UserContext.Provider
                value={{
                    shopsList,
                    loginState,
                    setloginState,
                    selectedShop,
                    setShops,
                    setSelectedShops,
                }}
            >
                {!loginState ? (
                    <Login />
                ) : (
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
                )}
            </UserContext.Provider>
        </Fragment>
    );
};

export default App;
