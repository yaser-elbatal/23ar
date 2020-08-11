import React from 'react'
import { Form, FormGroup, Label, Input, Card, CardImg, CardImgOverlay, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
function Register() {
    return (
        < div>
            <Card inverse >
                <CardImg width="100%" src={require('../../assets/Images/bg_map.png')} alt="Card image cap" style={{ opacity: .3 }} />
                <CardImgOverlay >
                    <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }}>

                        <Col lg="10" >
                            <Card style={{ borderColor: 'white', shadowColor: 'black', boxShadow: '1px 1px 1px 1px #F2F2F2' }}>
                                <CardBody >
                                    <Row style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }}>
                                        <div style={{ width: '20%', marginLeft: '10px', }}>
                                            <img src={require('../../assets/Images/small_frame.png')} style={{ width: '100%', height: '350px', }} />
                                        </div>
                                        <div style={{ width: '65%' }}>
                                            <img src={require('../../assets/Images/biglogo.png')} style={{ width: '10%', height: '20%', }} />
                                            <Form >
                                                <FormGroup style={{ position: 'relative', marginTop: 10 }}>
                                                    <h6 style={{
                                                        alignSelf: "flex-start",
                                                        zIndex: 10,
                                                        position: 'absolute',
                                                        bottom: 30,
                                                        paddingRight: 10,
                                                        paddingLeft: 10,
                                                        backgroundColor: 'white',
                                                        right: 15,
                                                        fontSize: 14,
                                                        color: '#1CD6C9'
                                                    }}>اسم الشخصي</h6>

                                                    <Input
                                                        value='اوامر الشبكه'
                                                        type='text'
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
                                                        bottom: 30,
                                                        paddingRight: 10,
                                                        paddingLeft: 10,
                                                        backgroundColor: 'white',
                                                        right: 15,
                                                        fontSize: 14,
                                                        color: '#1CD6C9'
                                                    }}>رقم الجوال</h6>

                                                    <Input
                                                        value='00000000000000'
                                                        type='tel'
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
                                                        bottom: 30,
                                                        paddingRight: 10,
                                                        paddingLeft: 10,
                                                        backgroundColor: 'white',
                                                        right: 15,
                                                        fontSize: 14,
                                                        color: '#1CD6C9'
                                                    }}>البلد</h6>

                                                    <Input
                                                        value='السعوديه'
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
                                                        bottom: 30,
                                                        paddingRight: 10,
                                                        paddingLeft: 10,
                                                        backgroundColor: 'white',
                                                        right: 15,
                                                        fontSize: 14,
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
                                                <FormGroup style={{ position: 'relative', marginTop: 30 }}>
                                                    <h6 style={{
                                                        alignSelf: "flex-start",
                                                        zIndex: 10,
                                                        position: 'absolute',
                                                        bottom: 30,
                                                        paddingRight: 10,
                                                        paddingLeft: 10,
                                                        backgroundColor: 'white',
                                                        right: 15,
                                                        color: '#1CD6C9'
                                                    }}>تاكيد كلمه المرور الجديده </h6>

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
                                                <Link to={{ pathname: '/CodeConfirm' }} className="nav-link" style={{ backgroundColor: '#22D6C9', marginTop: 30 }}>
                                                    <h6 style={{ color: 'white' }}>تسجيل </h6>
                                                </Link>


                                            </Form>
                                        </div>


                                    </Row>

                                </CardBody>
                            </Card>
                        </Col>


                    </div>

                </CardImgOverlay>
            </Card>
        </div >
    )
}

export default Register
