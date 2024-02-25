// SignupPage.js
import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { signupAction } from '../redux/Action';

const SignupPage = () => {
    const dispatch = useDispatch()
    const onFinish = (values) => {
        console.log('Received values:', values);
        dispatch(signupAction(values))
    };

    return (
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
                            <h2 className="text-center mb-4">Signup Page Your Account</h2>
                        <Form
                            name="signupForm"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input placeholder="Username" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password placeholder="Password" />
                            </Form.Item>

                            <Form.Item
                                name="confirmPassword"
                                dependencies={['password']}
                                rules={[
                                    { required: true, message: 'Please confirm your password!' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('The two passwords do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder="Confirm Password" />
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
                                <Button type="primary" htmlType="submit">
                                    Signup
                                </Button>
                            </Form.Item>
                            <div className="social-login mb-3 type--A">
                                <h5 className="text-center mb-3">Social Signup</h5>
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
                                <a href="/login" className="text-decoration-none">
                                    Register here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    
    );
};

export default SignupPage;
