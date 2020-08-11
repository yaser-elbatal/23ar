import React from 'react'
import { Row, Col, Card, CardImg, CardBody, } from 'reactstrap'
import { Link } from 'react-router-dom'

function MyAdverts() {
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
            price: '10رس'
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
            price: '10رس'
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
            price: '10رس'

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
            price: '10رس'
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
            price: '10رس'
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
            price: '10رس'

        }
    ]

    return (
        <div>
            <div style={{ display: 'flex', marginTop: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ height: 30, width: 2, backgroundColor: '#4A4A4A' }}></div>
                <h6 style={{ color: '#158880', marginRight: 10 }}>اعلانتك</h6>
            </div>
            <Row style={{ margin: '5%' }}>
                {
                    data.map(re => {
                        return (
                            <Col lg='4'>
                                <Card style={{ marginTop: 10 }}>
                                    <Link className='nav-link' to={{ pathname: '/AdvDetailes' }}>
                                        <CardImg top width="100%" src={re.image} alt="Card image cap" />
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

                                                <div style={{ width: '100%', backgroundColor: 'black', height: '.5px', marginTop: 30, opacity: '.5' }}></div>
                                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 30, justifyContent: 'space-between' }}>
                                                    <Link to={{ pathname: '/EditAdv' }} className='nav-link'>
                                                        <h6 style={{ color: 'red', fontSize: 12 }}>تعديل الاعلان</h6>
                                                    </Link>
                                                    <h6 style={{ color: '#1CD6C9', fontSize: 12 }}>{re.price}</h6>

                                                </div>
                                            </div>

                                        </CardBody>
                                    </Link>

                                </Card>
                            </Col>
                        )
                    })
                }


            </Row>
        </div>
    )
}

export default MyAdverts
