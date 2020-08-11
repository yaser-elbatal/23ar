import React from 'react'
import { Row, Col, Card, CardImg, CardBody, NavLink, CardImgOverlay } from 'reactstrap'
import { Link, } from 'react-router-dom'

function Favourites() {
    const data = [
        {
            image: require('../../assets/Images/p4.jpg'),
            rent: 'ايجار',
            min: '22Min',
            filla: 'فيلا كبيره بحمام سباحه',
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
            filla: 'فيلا كبيره بحمام سباحه',
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
            filla: 'فيلا كبيره بحمام سباحه',
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
            filla: 'فيلا كبيره بحمام سباحه',
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
            filla: 'فيلا كبيره بحمام سباحه',
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
            filla: 'فيلا كبيره بحمام سباحه',
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
        <div>
            <div style={{ display: 'flex', marginTop: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ height: 30, width: 2, backgroundColor: '#4A4A4A' }}></div>
                <h6 style={{ color: '#158880', marginRight: 10 }}>المفضله</h6>
            </div>
            <Row style={{ margin: '5%' }}>
                {
                    data.map(re => {
                        return (
                            <Col lg='4'>
                                <Link className="nav-link" to={{ pathname: '/CityDetailes' }}>
                                    <Card style={{ marginTop: 10, overflow: 'hidden' }}>
                                        <CardImg top width="100%" src={re.image} alt="Card image cap" />
                                        <CardImgOverlay >
                                            <div style={{ display: 'flex', bottom: '5.5%', justifyContent: 'flex-end', position: 'relative', }}>
                                                <img src={require('../../assets/Images/bg_blue.png')} style={{ width: 40, height: 40, justifyContent: 'cenet' }} />
                                                <img src={require('../../assets/Images/like_red.png')} style={{ width: 20, height: 20, position: 'absolute', alignSelf: 'center', marginLeft: 10 }} />

                                            </div>
                                        </CardImgOverlay>
                                        <CardBody style={{ flex: 1, }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <p style={{ color: 'red', fontSize: 12 }}>{re.rent}</p>
                                                    <p style={{ color: '#BFBFBF', fontSize: 12, }}>{re.min}</p>
                                                </div>

                                                <h7 style={{ color: 'black', fontSize: 16, alignSelf: 'end', }}>{re.filla}</h7>

                                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                                    <img src={require('../../assets/Images/locationgray.png')} style={{ width: 15, height: 15, }} />
                                                    <h6 style={{ color: '#BFBFBF', fontSize: 12, alignSelf: 'end', }}>{re.site}</h6>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginTop: 10 }}>
                                                    <h7 style={{ color: '#158880', fontSize: 10, }}>{re.romm}</h7>
                                                    <h7 style={{ color: '#158880', fontSize: 10, }}>{re.Hall}</h7>
                                                    <h7 style={{ color: '#158880', fontSize: 10, }}>{re.bath}</h7>
                                                </div>

                                                <div style={{ width: '100%', backgroundColor: 'black', height: '.5px', marginTop: 30, opacity: .1 }}></div>

                                                <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>

                                                    <NavLink href='/EditInfo' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                                        <img src={re.tar} style={{ height: 30, width: 30, borderRadius: 50 }} />
                                                        <h6 style={{ color: '#4B4B4B', fontSize: 12, marginRight: 10 }}>{re.name}</h6>

                                                    </NavLink >

                                                    <h6 style={{ color: '#1CD6C9', fontSize: 14 }}>{re.price}</h6>
                                                </div>
                                            </div>

                                        </CardBody>
                                    </Card>
                                </Link>

                            </Col>
                        )
                    })
                }

            </Row>
        </div>
    )
}

export default Favourites
