import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { useForm } from '../../hooks/useForm';

const Login = () => {
    const { setloginState } = useContext(UserContext);
    const [toLogin, setToLogin] = useState(false);
    const [values, handleChange] = useForm({ username: '', password: '' });
    return (
        <div className='App container login'>
            <div className='row'>
                <div className='col-lg-16 '>
                    <form className='card'>
                        <h3 className='card-title'>Login</h3>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                id='exampleInputEmail1'
                                placeholder='username'
                                name='username'
                                value={values.username}
                                aria-describedby='emailHelp'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                name='password'
                                type='password'
                                onChange={handleChange}
                                value={values.password}
                                placeholder='password'
                                className='form-control'
                                id='exampleInputPassword1'
                            />
                        </div>

                        <button
                            type='button'
                            className='btn btn-primary'
                            onClick={() => {
                                const { username, password } = values;

                                if (
                                    username === 'admin' &&
                                    password === 'admin'
                                ) {
                                    setToLogin(true);
                                    setTimeout(() => {
                                        setloginState(true);
                                        localStorage.setItem('isLogin', true);
                                    }, 1000);
                                    return;
                                }
                                alert('Invalid username or passowrd!');
                            }}
                        >
                            {toLogin ? (
                                <div className='spinner-border' role='status'>
                                    <span className='sr-only'>Loading...</span>
                                </div>
                            ) : (
                                <span>Login</span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
