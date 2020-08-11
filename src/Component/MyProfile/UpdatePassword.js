import React from 'react'
import AdNavBar from '../advertising/AdNavBar'
import { Input, FormGroup, Form, Card, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'

function UpdatePassword() {
    return (
        <div>
            <AdNavBar />
            <div style={{ display: 'flex', marginTop: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ height: 30, width: 2, backgroundColor: '#4A4A4A' }}></div>
                <h6 style={{ color: '#158880', marginRight: 10 }}>تعديل كلمه المرور </h6>
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
                                }}>كود التحقق</h6>

                                <Input
                                    value='00000000'
                                    style={{
                                        justifyContent: "flex-end",
                                        borderColor: '#E0E0E0',
                                        paddingRight: 20,
                                        paddingLeft: 20,
                                        textAlign: "right",
                                        color: '#BDBDBD'
                                    }} />
                            </FormGroup>
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
                                }}>كلمه المرور الجديده</h6>

                                <Input
                                    type='password'
                                    value='0000000000'
                                    style={{
                                        justifyContent: "flex-end",
                                        borderColor: '#E0E0E0',
                                        paddingRight: 20,
                                        paddingLeft: 20,
                                        textAlign: "right",
                                        color: '#BDBDBD'
                                    }} />
                            </FormGroup>

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
                                        color: '#BDBDBD'
                                    }} />
                            </FormGroup>
                        </Form>
                    </Card>
                </Col>
            </Row>

            <Link to={{ pathname: '/MYProfile' }} className="nav-link" style={{ backgroundColor: '#22D6C9', width: '16%', height: '20%', margin: '5%', float: 'left' }}>
                <h6 style={{ color: 'white' }}>حفظ</h6>
            </Link>
            <Footer />
        </div>
    )
}

export default UpdatePassword
