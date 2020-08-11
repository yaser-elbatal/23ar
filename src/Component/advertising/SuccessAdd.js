import React from 'react'
import AdNavBar from './AdNavBar'
import { Row, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'

function SuccessAdd() {
    return (
        <div>
            <AdNavBar />
            <Row style={{ margin: '5%', }}>
                <Card style={{ borderColor: 'white', shadowColor: 'black', boxShadow: '4px 1px 4px 1px #F2F2F2', width: '100%', }}>
                    <CardBody style={{ width: '100%', }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img src={require('../../assets/Images/success.png')} style={{ width: '20%', height: '150px', alignSelf: 'center' }} />
                            <h6 style={{ marginTop: 30, fontSize: 14, color: '#D5D5D5' }}>
                                تم نشر الاعلان بتاريخ 10/08/2020 ورقم الاعلان 096321456789 بنجاح
                            </h6>
                            <h6 style={{ fontSize: 14, color: '#D5D5D5' }}>
                                يمكن الان عرض عقار للبيع والاستفاده من الموقع شكرا لاستخدامك هذه الخدمه
                            </h6>
                            <Link to={{ pathname: '/MyAdv' }} className="nav-link" style={{ backgroundColor: '#1CD6C9', marginTop: 30, height: '50px', width: '150px', alignItems: 'center', display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>
                                <h6 style={{ color: 'white', fontSize: 12 }}>عوده لصفحتك</h6>
                            </Link>
                        </div>

                    </CardBody>
                </Card>
            </Row>
            <Footer />
        </div>
    )
}

export default SuccessAdd
