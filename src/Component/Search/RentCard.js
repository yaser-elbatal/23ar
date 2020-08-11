import React from 'react'
import { Card, Row, Col, } from 'reactstrap'
import { Link } from 'react-router-dom'

function RentCard() {
    const data = [
        {
            image: require('../../assets/Images/p4.jpg'),
            rent: 'ايجار',
            min: '22Min',
            filla: 'منتجع جديد',
            site: 'السعوديه - الرياض - شارع التخصصي',
            romm: '4غرف',
            Hall: 'صاله',
            bath: '2حمام',
            price: '10رس',
            tar: require('../../assets/Images/yass.jpg'),
            name: 'الشيخ احمد'
        },
        {
            image: require('../../assets/Images/p8.jpg'),
            rent: 'ايجار',
            min: '22Min',
            filla: 'منتجع جديد',
            site: 'السعوديه - الرياض - شارع التخصصي',
            romm: '4غرف',
            Hall: 'صاله',
            bath: '2حمام',
            price: '10رس',
            tar: require('../../assets/Images/yass.jpg'),
            name: 'الشيخ احمد'
        },
        {
            image: require('../../assets/Images/peter.jpg'),
            rent: 'ايجار',
            min: '22Min',
            filla: 'منتجع جديد',
            site: 'السعوديه - الرياض - شارع التخصصي',
            romm: '4غرف',
            Hall: 'صاله',
            bath: '2حمام',
            price: '10رس',
            tar: require('../../assets/Images/yass.jpg'),
            name: 'الشيخ احمد'

        },
        {
            image: require('../../assets/Images/p7.jpg'),
            rent: 'ايجار',
            min: '22Min',
            filla: 'منتجع جديد',
            site: 'السعوديه - الرياض - شارع التخصصي',
            romm: '4غرف',
            Hall: 'صاله',
            bath: '2حمام',
            price: '10رس',
            tar: require('../../assets/Images/yass.jpg'),
            name: 'الشيخ احمد'
        },
        {
            image: require('../../assets/Images/p1.jpg'),
            rent: 'ايجار',
            min: '22Min',
            filla: 'منتجع جديد',
            site: 'السعوديه - الرياض - شارع التخصصي',
            romm: '4غرف',
            Hall: 'صاله',
            bath: '2حمام',
            price: '10رس',
            tar: require('../../assets/Images/yass.jpg'),
            name: 'الشيخ احمد'
        },
        {
            image: require('../../assets/Images/p3.jpg'),
            rent: 'ايجار',
            min: '22Min',
            filla: 'منتجع جديد',
            site: 'السعوديه - الرياض - شارع التخصصي',
            romm: '4غرف',
            Hall: 'صاله',
            bath: '2حمام',
            price: '10رس',
            tar: require('../../assets/Images/yass.jpg'),
            name: 'الشيخ احمد'

        }
    ]
    return (
        <Row style={{ margin: '6%' }}>
            {
                data.map(re => {
                    return (
                        <Col md="12" style={{ width: '80%', marginTop: 20 }}>
                            <Link className='nav-link' to={{ pathname: '/CityDetailes' }}>
                                <Card style={{ borderColor: 'white', shadowColor: 'black', boxShadow: '2px 2px 2px 2px #F2F2F2', width: '100%', height: '100%' }}>
                                    <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>
                                        <img src={re.image} style={{ height: '100%', width: '25%' }} />
                                        <div style={{ position: 'absolute', margin: 20, backgroundColor: 'red', }}>
                                            <h6 style={{ alignSelf: 'center', color: 'white', padding: 5, fontSize: 12, paddingLeft: 15, paddingRight: 15 }}>جديد</h6>
                                        </div>
                                        <div style={{ width: '70%', margin: 10, flexDirection: 'column', display: 'flex' }}>

                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <h6 style={{ color: 'red', fontSize: 12 }}>{re.rent}</h6>
                                                <h6 style={{ color: '#E0E0E0', fontSize: 12 }}>{re.min}</h6>
                                            </div>

                                            <h6 style={{ color: '#4B4B4B', alignSelf: 'end', }}>{re.filla}</h6>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, }}>
                                                <img src={require('../../assets/Images/locationgray.png')} style={{ width: 15, height: 15, }} />
                                                <h6 style={{ color: '#BFBFBF', fontSize: 12, alignSelf: 'end', }}>السعوديه - الرياض - شارع التخصصي</h6>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'row', width: '30%', justifyContent: 'space-between' }}>
                                                <h7 style={{ color: '#158880', fontSize: 12, }}>{re.romm}</h7>
                                                <h7 style={{ color: '#158880', fontSize: 12, }}>{re.Hall}</h7>
                                                <h7 style={{ color: '#158880', fontSize: 12, }}>{re.bath}</h7>
                                            </div>
                                            <div style={{ width: '100%', height: .1, backgroundColor: 'black', opacity: .1, marginTop: 20 }}></div>
                                            <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                                    <img src={re.tar} style={{ height: 30, width: 30, borderRadius: 50 }} />
                                                    <h6 style={{ color: '#4B4B4B', fontSize: 12, marginRight: 10 }}>{re.name}</h6>

                                                </div>
                                                <h6 style={{ color: '#1CD6C9', fontSize: 14 }}>{re.price}</h6>

                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Link>

                        </Col>
                    )
                })
            }

        </Row>
    )
}

export default RentCard
