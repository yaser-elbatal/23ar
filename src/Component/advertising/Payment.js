import React from 'react'
import AdNavBar from './AdNavBar'
import { Row, Card, CardBody, Input, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'

function Payment() {
    return (
        <div>
            <AdNavBar />

            <div style={{ display: 'flex', marginTop: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ height: 30, width: 2, backgroundColor: '#4A4A4A' }}></div>
                <h5 style={{ color: '#158880', marginRight: 10, fontWeight: 'bold', }}>أضف أعلان</h5>
            </div>
            <Row style={{ margin: '5%', }}>
                <Card style={{ borderColor: 'white', shadowColor: 'white', boxShadow: '1px 1px 1px 1px #F2F2F2', width: '100%' }}>
                    <CardBody>
                        <h6>اختر وسائل الدفع الخاص بك</h6>
                        <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30, }}>
                            <img src={require('../../assets/Images/Mada_Logo.png')} style={{ width: 50, height: 50 }} />
                            <FormGroup style={{ paddingRight: 20, paddingLeft: 20, }}>
                                <Input type="radio" name="radio" />
                            </FormGroup>
                            <img src={require('../../assets/Images/paypal.png')} style={{ width: 50, height: 50 }} />

                            <FormGroup style={{ paddingRight: 20, paddingLeft: 20, }}>
                                <Input type="radio" name="radio" />
                            </FormGroup>

                            <img src={require('../../assets/Images/master.png')} style={{ width: 50, height: 50 }} />
                            <FormGroup style={{ paddingRight: 20, paddingLeft: 20, }}>
                                <Input type="radio" name="radio" />
                            </FormGroup>

                            <img src={require('../../assets/Images/visa.png')} style={{ width: 50, height: 50 }} />
                            <FormGroup style={{ paddingRight: 20, paddingLeft: 20, }}>
                                <Input type="radio" name="radio" />
                            </FormGroup>

                        </Row>
                    </CardBody>

                    <Link to={{ pathname: '/PublishAd' }} className="nav-link" style={{ backgroundColor: '#1CD6C9', marginBottom: 60, marginTop: 60, height: '50px', width: '150px', alignItems: 'center', display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>
                        <h6 style={{ color: 'white', fontSize: 12 }}>استمرار</h6>
                    </Link>
                </Card>
            </Row>
            <Footer />
        </div>
    )
}

export default Payment
