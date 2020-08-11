import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Card, CardImg, CardImgOverlay, CardBody, Col } from 'reactstrap';

import { Link } from 'react-router-dom';

function LoginScreen() {
    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);
    return (


        < div>
            <Card inverse >
                <CardImg width="100%" src={require('../../assets/Images/bg_map.png')} alt="Card image cap" style={{ opacity: .3 }} />
                <CardImgOverlay >
                    <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }}>
                        <Col md="8" >
                            <Card style={{ borderColor: 'white', shadowColor: 'black', boxShadow: '1px 1px 1px 1px #F2F2F2' }}>
                                <CardBody style={{ marginRight: '15%', marginLeft: '15%' }}>
                                    <img src={require('../../assets/Images/biglogo.png')} style={{ width: '20%', height: '25%', }} />
                                    <Form >
                                        <FormGroup style={{ position: 'relative', marginTop: 50 }}>
                                            <h6 style={{
                                                alignSelf: "flex-start",
                                                zIndex: 10,
                                                position: 'absolute',
                                                bottom: 33,
                                                paddingRight: 10,
                                                paddingLeft: 10,
                                                backgroundColor: 'white',
                                                right: 15,
                                                fontSize: 14,
                                                color: '#1CD6C9',
                                                fontSize: 12,
                                            }}>رقم الجوال</h6>

                                            <Input
                                                value='00000000000000'
                                                style={{
                                                    justifyContent: "flex-end",
                                                    borderColor: '#E0E0E0',
                                                    paddingRight: 20,
                                                    paddingLeft: 20,
                                                    textAlign: "right",
                                                    color: '#BDBDBD',
                                                    padding: 22
                                                }} />
                                        </FormGroup>
                                        <FormGroup style={{ position: 'relative', marginTop: 30 }}>
                                            <h6 style={{
                                                alignSelf: "flex-start",
                                                zIndex: 10,
                                                position: 'absolute',
                                                bottom: 33,
                                                paddingRight: 10,
                                                paddingLeft: 10,
                                                backgroundColor: 'white',
                                                right: 15,
                                                fontSize: 12,
                                                color: '#1CD6C9'
                                            }}>كلمه المرور </h6>

                                            <Input
                                                type='password'
                                                value='0000000000'
                                                style={{
                                                    justifyContent: "flex-end",
                                                    borderColor: '#E0E0E0',
                                                    paddingRight: 20,
                                                    paddingLeft: 20,
                                                    textAlign: "right",
                                                    color: '#BDBDBD',
                                                    padding: 22
                                                }} />
                                        </FormGroup>
                                        <Link to={{ pathname: '/ChangePassword' }} className="nav-link" style={{ color: 'black' }}>
                                            <p className='color_white text_center' style={{ fontSize: 12, }}>تغير كلمه المرور ؟</p>
                                        </Link>
                                        <Link to={{ pathname: '/Home' }} className="nav-link" style={{ backgroundColor: '#22D6C9', marginTop: 30 }}>
                                            <h6 style={{ color: 'white' }}>تسجيل الدخول</h6>
                                        </Link>
                                        <Link to={{ pathname: '/Register' }} className="nav-link" style={{ marginTop: 30 }}>
                                            <h6 style={{ color: '#22D6C9' }}>انشاء حساب</h6>
                                        </Link>

                                    </Form>


                                </CardBody>
                            </Card>
                        </Col>
                    </div>

                </CardImgOverlay>
            </Card>
        </div >


    )
}

export default LoginScreen
