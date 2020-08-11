import React from 'react'
import { Form, FormGroup, Label, Input, Card, CardImg, CardImgOverlay, CardBody, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

function ChangePassword() {
    return (



        < div>
            <Card inverse>
                <CardImg width="100%" src={require('../../assets/Images/bg_map.png')} alt="Card image cap" style={{ opacity: .2 }} />
                <CardImgOverlay >
                    <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }}>
                        <Col md="10" >
                            <Card >
                                <CardBody style={{ marginRight: '15%', marginLeft: '15%' }}>
                                    <img src={require('../../assets/Images/biglogo.png')} style={{ width: '20%', height: '25%', }} />
                                    <Form>
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
                                            }}>كود التحقق </h6>

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
                                                bottom: 33,
                                                paddingRight: 10,
                                                paddingLeft: 10,
                                                backgroundColor: 'white',
                                                right: 15,
                                                fontSize: 12,
                                                color: '#1CD6C9'
                                            }}> كلمه المرور الجديده </h6>

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
                                                bottom: 33,
                                                paddingRight: 10,
                                                paddingLeft: 10,
                                                backgroundColor: 'white',
                                                right: 15,
                                                fontSize: 12,
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
                                        <Link to={{ pathname: '/login' }} className="nav-link" style={{ backgroundColor: '#22D6C9', marginTop: 30, marginBottom: 30 }}>
                                            <h8 style={{ color: 'white' }}>ارسال </h8>
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



export default ChangePassword
