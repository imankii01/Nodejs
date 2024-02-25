// LoginPage.js
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const LoginPage = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Add login logic here
    };

    return (
        <>

            <div className="container login">
                <div className="row">
                    {/* Left Blank Side */}
                    <div className="col-lg-6" />
                    {/* Right Side Form */}
                    <div className="col-lg-6 d-flex align-items-center justify-content-center right-side right-login">
                        <div className="form-2-wrapper">
                            <div className="logo text-center">
                                <h2>Logo</h2>
                            </div>
                            <h2 className="text-center mb-4">Sign Into Your Account</h2>
                            <Form
                                name="loginForm"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    className="mb-3 form-box"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input className="form-control" placeholder="Username" />
                                </Form.Item>

                                <Form.Item
                                    className="mb-3 form-box"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password className="form-control" placeholder="Password" />
                                </Form.Item>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="rememberMe"
                                        />
                                        <label className="form-check-label" htmlFor="rememberMe">
                                            Remember me
                                        </label>
                                        <a
                                            href="forget-3.html"
                                            className="text-decoration-none float-end"
                                        >
                                            Forget Password
                                        </a>
                                    </div>
                                </div>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="btn btn-outline-secondary login-btn w-100 mb-3">
                                        Login
                                    </Button>
                                </Form.Item>
                                <div className="social-login mb-3 type--A">
                                    <h5 className="text-center mb-3">Social Login</h5>
                                    <button className="btn btn-outline-secondary  mb-3">
                                        <i className="fa-brands fa-google text-danger" /> Sign With Google
                                    </button>
                                    <button className="btn btn-outline-secondary mb-3">
                                        <i className="fa-brands fa-facebook-f text-primary" /> Sign With
                                        Facebook
                                    </button>
                                </div>
                            </Form>

                            {/* Register Link */}
                            <p className="text-center register-test mt-3">
                                Don't have an account?{" "}
                                <a href="register-3.html" className="text-decoration-none">
                                    Register here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default LoginPage;
