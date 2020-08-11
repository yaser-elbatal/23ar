import React from 'react'
import { Form, FormGroup, Label, Input, Card, CardImg, CardImgOverlay, CardBody, Col } from 'reactstrap';

import { Link } from 'react-router-dom';

function CodeConfirmation() {
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
                                    <h6 style={{ textAlign: 'center', color: 'black', marginTop: 30, marginBottom: 30 }}>ادخل كود التحقق المرسل علي هاتفك لتأكيد حسابك</h6>
                                    <Form >
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
                                                color: '#1CD6C9',
                                                fontSize: 12,
                                            }}>كود التحقق </h6>

                                            <Input
                                                type='number'
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


                                        <Link to={{ pathname: '/Login' }} className="nav-link" style={{ backgroundColor: '#22D6C9', marginTop: 30, marginBottom: 100 }}>
                                            <h6 style={{ color: 'white' }}>ارسال</h6>
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

export default CodeConfirmation
