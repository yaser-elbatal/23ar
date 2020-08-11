import React from 'react'
import { Card, CardImg, CardImgOverlay, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

function NewCitiesCompany() {
    const data = [
        {
            image: require('../../assets/Images/p4.jpg'),
            name: 'شركه عقارات',
            num: '8/7/2020'

        }
        ,
        {
            image: require('../../assets/Images/p3.jpg'),
            name: 'شركه تنفيذ الديكورات',
            num: '8/7/2020'

        },
        {
            image: require('../../assets/Images/p2.jpg'),
            name: 'شركه التعمير والاسكان',
            num: '8/7/2020'

        },
    ]
    return (
        <div>
            <div style={{ display: 'flex', marginTop: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ height: 30, width: 2, backgroundColor: '#4A4A4A' }}></div>
                <h6 style={{ color: '#158880', marginRight: 10 }}>اعلانات شركات المدن الجديده </h6>
            </div>
            <Row style={{ margin: '5%' }}>

                {
                    data.map(dat => {
                        return (
                            <Col lg='4' >
                                <Link to={{ pathname: '/CityDetailes' }}>
                                    <Card inverse style={{ backgroundColor: 'black', marginTop: 5, }}>
                                        <CardImg src={dat.image} height='100%' style={{ opacity: '.5' }} />
                                        <CardImgOverlay style={{ top: '50%' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                                <small style={{ color: 'white', fontSize: 12 }}>{dat.num}</small>
                                                <big >{dat.name}</big>
                                            </div>
                                        </CardImgOverlay>
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

export default NewCitiesCompany
