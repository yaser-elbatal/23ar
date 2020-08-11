import React from 'react'
import { Row, Col } from 'reactstrap'

function Clients() {
    return (
        <div>
            <div style={{ display: 'flex', marginTop: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ height: 30, width: 2, backgroundColor: '#4A4A4A' }}></div>
                <h6 style={{ color: '#158880', marginRight: 10 }}>عملائنا</h6>
            </div>
            <Row style={{ justifyContent: 'center', marginTop: 30 }}>
                <Col lg='2'>
                    <img src={require('../../assets/Images/reaal.jpg')} style={{ width: '80%', height: '100%', }} />
                </Col>
                <Col lg='2'>
                    <img src={require('../../assets/Images/4.png')} style={{ width: '100%', height: '100%', }} />
                </Col>
                <Col lg='2'>
                    <img src={require('../../assets/Images/22.png')} style={{ width: '100%', height: '80%', }} />
                </Col>
                <Col lg='2'>
                    <img src={require('../../assets/Images/picture.png')} style={{ width: '100%', height: '100%', }} />
                </Col>
                <Col lg='2'>
                    <img src={require('../../assets/Images/1914.png')} style={{ width: '100%', height: '100%', }} />
                </Col>
            </Row>
        </div>

    )
}

export default Clients
