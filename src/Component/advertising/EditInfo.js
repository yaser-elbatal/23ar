import React from 'react'
import AdNavBar from './AdNavBar'
import { CardBody, Card, Row, Col, FormGroup, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'

function EditInfo() {
    return (
        <div>
            <AdNavBar />
            <div style={{ display: 'flex', marginTop: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ height: 30, width: 2, backgroundColor: '#4A4A4A' }}></div>
                <h5 style={{ color: '#158880', marginRight: 10 }}>تعديل معلومات المعلن</h5>
            </div>
            <div style={{ margin: '5%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                    <h6 >معلومات المعلن</h6>
                </div>
                <Row style={{ marginTop: '3%' }}>
                    <Col lg='12'>
                        <Card style={{ borderColor: 'white', shadowColor: 'black', boxShadow: '1px 1px 1px 1px #F2F2F2' }}>
                            <CardBody>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex' }}>
                                        <h7 style={{ color: '#7DDAD3', marginTop: 10, float: 'right' }}>وسائل الاتصال</h7>

                                    </div>
                                    <Row style={{ width: '100%', }}>
                                        <Col lg='6'>
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
                                                    fontSize: 14,
                                                    color: '#1CD6C9',
                                                    fontSize: 12,
                                                }}>الفيس بوك</h6>

                                                <Input
                                                    value='link.com'
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
                                        </Col>
                                        <Col lg='6'>
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
                                                    fontSize: 14,
                                                    color: '#1CD6C9',
                                                    fontSize: 12,
                                                }}>تويتر</h6>

                                                <Input
                                                    value='link.com'
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
                                        </Col>
                                        <Col lg='6'>
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
                                                    fontSize: 14,
                                                    color: '#1CD6C9',
                                                    fontSize: 12,
                                                }}>الهاتف</h6>

                                                <Input
                                                    value='link.com'
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
                                        </Col>
                                        <Col lg='6'>
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
                                                    fontSize: 14,
                                                    color: '#1CD6C9',
                                                    fontSize: 12,
                                                }}>الميل</h6>

                                                <Input
                                                    value='link.com'
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

                                        </Col>
                                        <Col lg='12'>
                                            <FormGroup style={{ position: 'relative', marginTop: 30 }}>
                                                <h6 style={{
                                                    alignSelf: "flex-start",
                                                    zIndex: 10,
                                                    position: 'absolute',
                                                    bottom: '145px',
                                                    paddingRight: 10,
                                                    paddingLeft: 10,
                                                    backgroundColor: 'white',
                                                    right: 15,
                                                    fontSize: 14,
                                                    color: '#1CD6C9',
                                                    fontSize: 12,
                                                }}>تفاصيل اكتر</h6>

                                                <Input
                                                    value='بعض المعلومات عنك '
                                                    style={{
                                                        justifyContent: "flex-end",
                                                        borderColor: '#E0E0E0',
                                                        paddingRight: 20,
                                                        paddingLeft: 20,
                                                        textAlign: "right",
                                                        color: '#BDBDBD',
                                                        height: '160px',
                                                    }} />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '5%', marginTop: 0 }}>
                <Link to={{ pathname: '/MyAdv' }} className="nav-link" style={{ backgroundColor: '#1CD6C9', height: '50px', width: '150px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <h7 style={{ color: 'white', fontSize: 12 }}>استمرار</h7>
                </Link>
            </div>
            <Footer />
        </div >
    )
}

export default EditInfo
