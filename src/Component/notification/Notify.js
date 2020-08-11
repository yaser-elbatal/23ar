import React from 'react'
import AdNavBar from '../advertising/AdNavBar'
import Footer from '../Home/Footer'
import { Col } from 'reactstrap'

function Notify() {
    return (
        <div>
            <AdNavBar />
            <div style={{ float: 'right', margin: '3%', marginRight: '5%' }}>
                <h6 style={{ color: '#5B5B5B', fontSize: 16 }}>الاشعارات</h6>

            </div>
            <div style={{ margin: '10%' }}>
                <Col lg='12'>
                    <div style={{ flexDirection: 'row', marginTop: 30, display: 'flex', alignItems: 'center' }}>
                        <img src={require('../../assets/Images/bell_vic.png')} style={{ width: 20, height: 30, }} />
                        <h6 style={{ color: '#959595', fontSize: 12, marginRight: 30 }}>تم العثور علي طلبك بتاريخ 30/6</h6>
                    </div>
                </Col>

                <Col lg='12'>
                    <div style={{ flexDirection: 'row', marginTop: 30, display: 'flex', alignItems: 'center' }}>
                        <img src={require('../../assets/Images/bell_vic.png')} style={{ width: 20, height: 30, }} />
                        <h6 style={{ color: '#959595', fontSize: 12, marginRight: 30 }}>تم العثور علي طلبك بتاريخ 30/6</h6>
                    </div>
                </Col>
                <Col lg='12'>
                    <div style={{ flexDirection: 'row', marginTop: 30, display: 'flex', alignItems: 'center' }}>
                        <img src={require('../../assets/Images/bell_vic.png')} style={{ width: 20, height: 30, }} />
                        <h6 style={{ color: '#959595', fontSize: 12, marginRight: 30 }}>تم العثور علي طلبك بتاريخ 30/6</h6>
                    </div>
                </Col>
                <Col lg='12'>
                    <div style={{ flexDirection: 'row', marginTop: 30, display: 'flex', alignItems: 'center' }}>
                        <img src={require('../../assets/Images/bell_vic.png')} style={{ width: 20, height: 30, }} />
                        <h6 style={{ color: '#959595', fontSize: 12, marginRight: 30 }}>تم العثور علي طلبك بتاريخ 30/6</h6>
                    </div>
                </Col>
            </div>

            <Footer />
        </div>
    )
}

export default Notify
