import React, { Fragment, useState, useEffect } from 'react';
import AppTitle from './AppTitle';
import NavBar from './NavBar';
import ShopList from './pages/ShopList';
import ShopDetails from './pages/ShopDetails';
import Login from './pages/Login';
import { UserContext } from '../context/userContext';
import firebase from '../config/firebaseConfig';
import { AppUtils } from '../util/AppUtil';

const App = () => {
    const [loginState, setloginState] = useState(false);
    const [shopsList, setShops] = useState([]);
    const [selectedShop, setSelectedShops] = useState({});
    const [searchShop, setSearchShop] = useState('');

    useEffect(() => {
        if (shopsList.length) {
            return;
        }

        setloginState(localStorage.getItem('isLogin'));
        (async () => {
            getAllShops();
        })();
    }, [shopsList]);

    const getAllShops = () => {
        const getData = firebase.firestore().collection('newShopList');
        getData.onSnapshot((snapshot) => {
            const allShop = snapshot.docs.map((shop) => ({
                id: shop.id,
                ...shop.data(),
            }));
            setShops(allShop);
            setSelectedShops(allShop[0]);
            // console.log(allShop);
        });
    };

    const searchShopsResults = () => {
        const appUtil = new AppUtils();
        const results = appUtil.filterArrayByString(shopsList, searchShop);
        if (searchShop.length === 2 && results.length) {
            getAllShops();
            return;
        }

        if (results.length && results && searchShop) {
            setShops(results);
            setSelectedShops(results[0]);
            return;
        }
        getAllShops();
    };

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
                    setSearchShop,
                }}
            >
                {!loginState ? (
                    <Login />
                ) : (
                    <div className='App container card'>
                        <AppTitle />
                        <NavBar
                            getSearch={() => {
                                searchShopsResults();
                            }}
                        />
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
