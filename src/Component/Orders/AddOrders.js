import React from 'react'
import AdNavBar from '../advertising/AdNavBar'
import { Row, Col, Card, CardImg, CardBody, Input, FormGroup, Label, CardImgOverlay } from 'reactstrap'
import GoogleMapReact from 'google-map-react'

import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'



const AnyReactComponent = ({ text }) => <div style={{ backgroundColor: 'black', width: 70, height: 30, borderRadius: 30, alignItems: 'center', justifyContent: 'center', display: 'flex', borderBottomRightRadius: 0 }}>
    <h6 style={{ color: 'white', textAlign: 'center', marginRight: 10, marginTop: 15 }}>{text}</h6></div>;

function AddOrders() {
    return (
        <div>
            <AdNavBar />
            <div style={{ display: 'flex', marginTop: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ height: 30, width: 2, backgroundColor: '#4A4A4A' }}></div>
                <h5 style={{ color: '#158880', marginRight: 10 }}>اضافه طلب</h5>
            </div>

            <Row style={{ margin: '5%' }}>
                <Card style={{ borderColor: 'white', shadowColor: 'white', boxShadow: '1px 1px 1px 1px #F2F2F2', width: '100%' }}>
                    <CardBody>
                        <FormGroup style={{ position: 'relative', marginTop: 30, }}>
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
                            }}>موقع العقار</h6>

                            <Input
                                placeholder='تحديد موقعك'

                                style={{
                                    justifyContent: "flex-end",
                                    borderColor: '#E0E0E0',
                                    paddingRight: 20,
                                    paddingLeft: 20,
                                    textAlign: "right",
                                    color: '#BDBDBD',
                                    padding: 22,

                                }} />
                            <img src={require('../../assets/Images/pin.png')} style={{ width: 15, height: 20, float: 'left', position: 'absolute', bottom: '25%', right: '97%' }} />
                        </FormGroup>

                        <div style={{ height: '50vh', width: '100%', }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyBa6F73tNUJygFHnBmcHGrVwRuLVfro3Yo" }}
                                defaultZoom={11}
                                defaultCenter={{ lat: 30.06263, lng: 30.06263 }}
                            >
                                <AnyReactComponent
                                    lat={30.06263}
                                    lng={30.06263}
                                    text="الرياض"
                                />
                            </GoogleMapReact>
                        </div>
                        <Row>

                            <Col md='6'>
                                <FormGroup style={{ position: 'relative', marginTop: 30, }}>
                                    <h6 style={{
                                        alignSelf: "flex-start",
                                        zIndex: 10,
                                        position: 'absolute',
                                        bottom: '70%',
                                        paddingRight: 10,
                                        paddingLeft: 10,
                                        backgroundColor: 'white',
                                        right: 15,
                                        fontSize: 14,
                                        color: '#1CD6C9',
                                        fontSize: 12,
                                    }}>نوع العقار</h6>
                                    <Input type="select" name="نوع العقار" placeholder='نوع العقار' style={{ borderColor: '#E0E0E0', fontSize: 14, height: '45px' }}>
                                        <option selected={true}>شقه للايجار</option>
                                        <option>شقه تمليك</option>
                                        <option>ايجار جديد</option>
                                        <option>ايجار قديم</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md='6'>
                                <FormGroup style={{ position: 'relative', marginTop: 30, }}>
                                    <h6 style={{
                                        alignSelf: "flex-start",
                                        zIndex: 10,
                                        position: 'absolute',
                                        bottom: '70%',
                                        paddingRight: 10,
                                        paddingLeft: 10,
                                        backgroundColor: 'white',
                                        right: 15,
                                        fontSize: 14,
                                        color: '#1CD6C9',
                                        fontSize: 12,
                                    }}>نوع السكن</h6>
                                    <Input type="select" name="نوع السكن" placeholder='نوع السكن' style={{ borderColor: '#E0E0E0', fontSize: 14, height: '45px' }}>
                                        <option selected={true}>عوائل</option>
                                        <option>افراد</option>
                                        <option>جماعات</option>
                                        <option>كورسات</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md='6'>
                                <FormGroup style={{ position: 'relative', marginTop: 30, }}>
                                    <h6 style={{
                                        alignSelf: "flex-start",
                                        zIndex: 10,
                                        position: 'absolute',
                                        bottom: '70%',
                                        paddingRight: 10,
                                        paddingLeft: 10,
                                        backgroundColor: 'white',
                                        right: 15,
                                        fontSize: 14,
                                        color: '#1CD6C9',
                                        fontSize: 12,
                                    }}>الصالات</h6>
                                    <Input type="select" name="نوع السكن" placeholder='نوع السكن' style={{ borderColor: '#E0E0E0', fontSize: 14, height: '45px' }}>
                                        <option selected={true}>2</option>
                                        <option>1</option>
                                        <option>0</option>
                                        <option>3</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md='6'>
                                <FormGroup style={{ position: 'relative', marginTop: 30, }}>
                                    <h6 style={{
                                        alignSelf: "flex-start",
                                        zIndex: 10,
                                        position: 'absolute',
                                        bottom: '70%',
                                        paddingRight: 10,
                                        paddingLeft: 10,
                                        backgroundColor: 'white',
                                        right: 15,
                                        fontSize: 14,
                                        color: '#1CD6C9',
                                        fontSize: 12,
                                    }}>دورات المياه</h6>
                                    <Input type="select" name="نوع السكن" placeholder='نوع السكن' style={{ borderColor: '#E0E0E0', fontSize: 14, height: '45px' }}>
                                        <option selected={true}>1</option>
                                        <option>4</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md='6'>
                                <FormGroup style={{ position: 'relative', marginTop: 30, }}>
                                    <h6 style={{
                                        alignSelf: "flex-start",
                                        zIndex: 10,
                                        position: 'absolute',
                                        bottom: '70%',
                                        paddingRight: 10,
                                        paddingLeft: 10,
                                        backgroundColor: 'white',
                                        right: 15,
                                        fontSize: 14,
                                        color: '#1CD6C9',
                                        fontSize: 12,
                                    }}>الغرف</h6>
                                    <Input type="select" name="نوع العقار" placeholder='نوع العقار' style={{ borderColor: '#E0E0E0', fontSize: 14, height: '45px' }}>
                                        <option selected={true}>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md='6'>
                                <FormGroup style={{ position: 'relative', marginTop: 30, }}>
                                    <h6 style={{
                                        alignSelf: "flex-start",
                                        zIndex: 10,
                                        position: 'absolute',
                                        bottom: '70%',
                                        paddingRight: 10,
                                        paddingLeft: 10,
                                        backgroundColor: 'white',
                                        right: 15,
                                        fontSize: 14,
                                        color: '#1CD6C9',
                                        fontSize: 12,
                                    }}>الدور</h6>
                                    <Input type="select" name="نوع السكن" placeholder='نوع السكن' style={{ borderColor: '#E0E0E0', fontSize: 14, height: '45px' }}>
                                        <option selected={true}>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md='6'>
                                <FormGroup style={{ position: 'relative', marginTop: 30, }}>
                                    <h6 style={{
                                        alignSelf: "flex-start",
                                        zIndex: 10,
                                        position: 'absolute',
                                        bottom: '70%',
                                        paddingRight: 10,
                                        paddingLeft: 10,
                                        backgroundColor: 'white',
                                        right: 15,
                                        fontSize: 14,
                                        color: '#1CD6C9',
                                        fontSize: 12,
                                    }}>عمر العقار</h6>
                                    <Input type="select" name="نوع العقار" placeholder='نوع العقار' style={{ borderColor: '#E0E0E0', fontSize: 14, height: '45px' }}>
                                        <option selected={true}>1</option>
                                        <option>2</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md='6'>
                                <FormGroup style={{ position: 'relative', marginTop: 30, }}>
                                    <h6 style={{
                                        alignSelf: "flex-start",
                                        zIndex: 10,
                                        position: 'absolute',
                                        bottom: '70%',
                                        paddingRight: 10,
                                        paddingLeft: 10,
                                        backgroundColor: 'white',
                                        right: 15,
                                        fontSize: 14,
                                        color: '#1CD6C9',
                                        fontSize: 12,
                                    }}>نوع الخدمه</h6>
                                    <Input type="select" name="نوع السكن" placeholder='نوع السكن' style={{ borderColor: '#E0E0E0', fontSize: 14, height: '45px' }}>
                                        <option selected={true}>ايجار</option>
                                        <option>تمليك</option>

                                    </Input>
                                </FormGroup>
                            </Col>
                            <div style={{ width: '100%', height: 1, backgroundColor: 'black', margin: '1.5%', opacity: .1, }}></div>
                            <Col lg='12'>
                                <h7 style={{ color: '#1CD6C9', fontWeight: 'bold', marginRight: '1.5%', float: 'right', }}>تفاصيل مضافه</h7>
                            </Col>

                            <Row lg='12' style={{ margin: '3%' }}>
                                <FormGroup check style={{ alignItems: 'center', display: 'flex', }}>
                                    <Input type="checkbox" />
                                    <Label check style={{ paddingRight: 20, color: '#6A6A6A' }}>
                                        مؤنثه
                                         </Label>
                                </FormGroup>

                                <FormGroup check style={{ alignItems: 'center', display: 'flex', }}>
                                    <Input type="checkbox" />
                                    <Label check style={{ paddingRight: 20, color: '#6A6A6A' }}>
                                        مطبخ
                                         </Label>
                                </FormGroup>
                                <FormGroup check style={{ alignItems: 'center', display: 'flex', }}>
                                    <Input type="checkbox" />
                                    <Label check style={{ paddingRight: 20, color: '#6A6A6A' }}>
                                        ملحق
                                         </Label>
                                </FormGroup>
                                <FormGroup check style={{ alignItems: 'center', display: 'flex', }}>
                                    <Input type="checkbox" />
                                    <Label check style={{ paddingRight: 20, color: '#6A6A6A' }}>
                                        مدخل سياره
                                         </Label>
                                </FormGroup>
                                <FormGroup check style={{ alignItems: 'center', display: 'flex', }}>
                                    <Input type="checkbox" />
                                    <Label check style={{ paddingRight: 20, color: '#6A6A6A' }}>
                                        مصعد
                                         </Label>
                                </FormGroup>

                                <FormGroup check style={{ alignItems: 'center', display: 'flex', }}>
                                    <Input type="checkbox" />
                                    <Label check style={{ paddingRight: 20, color: '#6A6A6A' }}>
                                        مكيف
                                         </Label>
                                </FormGroup>
                            </Row>
                            <div style={{ width: '100%', height: 1, backgroundColor: 'black', margin: '1.5%', opacity: .1, }}></div>
                            <Col lg='12'>
                                <h6 style={{ color: '#6A6A6A', fontWeight: 'bold', marginRight: '1.5%', float: 'right', fontSize: 12 }}>تفاصيل اساسيه</h6>
                            </Col>
                            <Col lg='12'>
                                <FormGroup style={{ position: 'relative', marginTop: 30, }}>
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
                                    }}>الحد الادني</h6>

                                    <Input
                                        value='2500 '

                                        style={{
                                            justifyContent: "flex-end",
                                            borderColor: '#E0E0E0',
                                            paddingRight: 20,
                                            paddingLeft: 20,
                                            textAlign: "right",
                                            color: '#6A6A6A',
                                            padding: 22,

                                        }} />
                                    <h6 style={{ position: 'absolute', bottom: '20%', right: '97%', color: '#BDBDBD', }} >
                                        ريال
                                            </h6>
                                </FormGroup>
                            </Col>
                            <FormGroup check style={{ alignItems: 'center', display: 'flex', margin: '1.5%' }}>
                                <Input type="checkbox" />
                                <Label check style={{ paddingRight: 20, color: '#6A6A6A' }}>
                                    ارسال اشعار عند وجود طلبك
                                         </Label>
                            </FormGroup>
                        </Row>
                    </CardBody>
                </Card>
            </Row>
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '5%', marginTop: 30 }}>
                <Link to={{ pathname: '/Orders' }} className="nav-link" style={{ backgroundColor: '#1CD6C9', height: '50px', width: '150px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <h7 style={{ color: 'white', fontSize: 12 }}>حفظ</h7>
                </Link>
            </div>
            <Footer />
        </div>

    )
}

export default AddOrders
