import React from "react";
import { API_PATH, NEWS_F6_TOKEN } from "../../utils/constants";
import { Formik } from "formik";
import { Context as AuthContext } from "../../context/auth";

const Login = () => {
    const { setAuthenticated } = React.useContext(AuthContext);

    const handleSubmit = (values) => {
        (async () => {
            try {
                const res = await fetch(API_PATH + "login", {
                    method: "POST",
                    body: values,
                });
                const data = await res.json();
                localStorage.setItem(
                    NEWS_F6_TOKEN,
                    data.token_type + " " + data.access_token
                );
                setAuthenticated(localStorage.getItem(NEWS_F6_TOKEN));
            } catch (error) {
                console.log(error.message);
            }
        })();
    };

    return (
        <div className='container'>
            <div className='row vh-100 justify-content-center align-items-center'>
                <div className='col-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3 className='text-center'>Admin</h3>
                        </div>
                        <div className='card-body'>
                            <Formik
                                initialValues={{ username: "", password: "" }}
                                onSubmit={(values) => {
                                    const data = new FormData();
                                    data.append("username", values.username);
                                    data.append("password", values.password);
                                    handleSubmit(data);
                                }}>
                                {({
                                    values,
                                    handleChange,
                                    handleSubmit,
                                    isSubmitting,
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            className='form-control mb-3'
                                            type='text'
                                            name='username'
                                            onChange={handleChange}
                                            value={values.username}
                                            autoComplete='current-username'
                                            placeholder='Username'
                                            required
                                        />
                                        <input
                                            className='form-control mb-3'
                                            type='password'
                                            name='password'
                                            onChange={handleChange}
                                            value={values.password}
                                            autoComplete='current-password'
                                            placeholder='Password'
                                            required
                                        />
                                        <button
                                            className='btn btn-primary w-100'
                                            type='submit'
                                            disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
