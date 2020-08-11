import React from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'

function Pice() {
    return (

        <Row style={{ margin: '3%' }}>
            <Col lg='10'>
                <Card style={{ borderColor: 'white', shadowColor: 'black', boxShadow: '1px 1px 1px 1px #F2F2F2' }}>
                    <CardBody>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', width: '50%', marginBottom: 60 }}>
                            <div style={{ flexDirection: 'column', display: 'flex', position: 'relative', width: '60%' }}>
                                <img src={require('../../assets/Images/ta.jpg')} style={{ width: '100%', height: '150px' }} />
                                <Link to={{ pathname: '/UpdateProfile' }} className="nav-link" style={{ backgroundColor: '#1CD6C9', height: '40px', width: '80%', alignItems: 'center', position: 'absolute', alignSelf: 'center', bottom: '-10%', }}>
                                    <h7 style={{ color: 'white', fontSize: 12 }}> تعديل المعلومات الشخصيه</h7>
                                </Link>
                            </div>

                            <div style={{ width: '45%', display: 'flex', flexDirection: 'column', margin: 10 }}>

                                <h6 style={{ color: '#959595', fontSize: 14, alignSelf: 'center' }}>yasser elbatal</h6>

                                <div style={{ flexDirection: 'row', display: 'flex', }}>
                                    <img src={require('../../assets/Images/phone (3).png')} style={{ width: 15, height: 15, top: 10 }} />
                                    <p style={{ color: '#959595', fontSize: 14, paddingRight: 10, alignSelf: 'end' }}> 212587436211</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', }}>
                                    <img src={require('../../assets/Images/locationgray.png')} style={{ width: 15, height: 15, }} />
                                    <h6 style={{ color: '#BFBFBF', fontSize: 12, alignSelf: 'end', paddingRight: 5 }}>الرياض- جده - السعوديه</h6>
                                </div>

                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Pice
