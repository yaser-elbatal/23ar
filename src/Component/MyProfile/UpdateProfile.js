import React from 'react'
import AdNavBar from '../advertising/AdNavBar'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Form, FormGroup, Input } from 'reactstrap'
import Footer from '../Home/Footer'

function UpdateProfile() {
    return (
        <div>
            <AdNavBar />
            <div>
                <div style={{ display: 'flex', marginTop: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ height: 30, width: 2, backgroundColor: '#4A4A4A' }}></div>
                    <h6 style={{ color: '#158880', marginRight: 10 }}>تعديل المعلومات الشخصيه </h6>
                </div>

                <Link style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                    <img src={require('../../assets/Images/ta.jpg')} style={{ width: '150px', height: '150px' }} />
                    <img src={require('../../assets/Images/small_frame.png')} style={{ width: '150px', height: '150px', position: 'absolute', opacity: .7, }} />
                </Link>
            </div>
            <Row style={{ margin: '4%' }}>
                <Col lg='12'>
                    <Card style={{ borderColor: 'white', shadowColor: 'black', boxShadow: '2px 2px 2px 4px #F2F2F2', marginBottom: 30 }}>
                        <Form style={{ margin: '2%', }}>
                            <FormGroup style={{ position: 'relative', marginTop: 30 }}>
                                <h6 style={{
                                    alignSelf: "flex-start",
                                    zIndex: 10,
                                    position: 'absolute',
                                    bottom: 22,
                                    paddingRight: 10,
                                    paddingLeft: 10,
                                    backgroundColor: 'white',
                                    right: 15,
                                    color: '#1CD6C9'
                                }}>اسم الشخص</h6>

                                <Input
                                    value='اوامر الشبكه'
                                    style={{
                                        justifyContent: "flex-end",
                                        borderColor: '#E0E0E0',
                                        paddingRight: 20,
                                        paddingLeft: 20,
                                        textAlign: "right",
                                        color: '#BDBDBD'
                                    }} />
                            </FormGroup>
                            <Row style={{ marginTop: 30 }}>
                                <Col lg='6'>
                                    <FormGroup style={{ position: 'relative' }}>
                                        <h6 style={{
                                            alignSelf: "flex-start",
                                            zIndex: 10,
                                            position: 'absolute',
                                            bottom: 22,
                                            paddingRight: 10,
                                            paddingLeft: 10,
                                            backgroundColor: 'white',
                                            right: 15,
                                            color: '#1CD6C9'
                                        }}>رقم الجوال</h6>

                                        <Input style={{
                                            justifyContent: "flex-end",
                                            borderColor: '#E0E0E0',
                                            paddingRight: 20,
                                            paddingLeft: 20,
                                            textAlign: "right",
                                        }} />
                                    </FormGroup>
                                </Col>

                                <Col lg='6'>
                                    <FormGroup style={{ position: 'relative' }}>
                                        <h6 style={{
                                            alignSelf: "flex-start",
                                            zIndex: 10,
                                            position: 'absolute',
                                            bottom: 22,
                                            paddingRight: 10,
                                            paddingLeft: 10,
                                            backgroundColor: 'white',
                                            right: 15,
                                            color: '#1CD6C9'
                                        }}>البلد</h6>

                                        <Input style={{
                                            justifyContent: "flex-end",
                                            borderColor: '#E0E0E0',
                                            paddingRight: 20,
                                            paddingLeft: 20,
                                            textAlign: "right",
                                        }} />
                                    </FormGroup>
                                </Col>
                            </Row>

                        </Form>
                    </Card>
                </Col>
            </Row>

            <Row style={{ margin: '4%' }}>
                <Col lg='12'>
                    <Card style={{ borderColor: 'white', shadowColor: 'black', boxShadow: '2px 2px 2px 4px #F2F2F2', marginBottom: 30 }}>
                        <Form style={{ margin: '2%', }}>
                            <h6 style={{ alignSelf: "flex-start", fontSize: 12, float: 'right' }}>
                                تغيير كلمه المرور
                            </h6>
                            <FormGroup style={{ position: 'relative', marginTop: 60 }}>
                                <h6 style={{
                                    alignSelf: "flex-start",
                                    zIndex: 10,
                                    position: 'absolute',
                                    bottom: 22,
                                    paddingRight: 10,
                                    paddingLeft: 10,
                                    backgroundColor: 'white',
                                    right: 15,
                                    color: '#1CD6C9'
                                }}>الهاتف</h6>

                                <Input
                                    value='000000000'
                                    style={{
                                        justifyContent: "flex-end",
                                        borderColor: '#E0E0E0',
                                        paddingRight: 20,
                                        paddingLeft: 20,
                                        textAlign: "right",
                                        color: '#BDBDBD'
                                    }} />
                            </FormGroup>
                        </Form>
                    </Card>
                </Col>
            </Row>

            <Link to={{ pathname: '/UpdatePassword' }} className="nav-link" style={{ backgroundColor: '#22D6C9', width: '16%', height: '20%', margin: '5%', float: 'left' }}>
                <h6 style={{ color: 'white' }}>استمرار</h6>
            </Link>
            <Footer />

        </div >
    )
}

export default UpdateProfile
