import React from 'react'
import { Card, CardImg, CardImgOverlay, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

function ContractingServCompany() {
    const data = [
        {
            image: require('../../assets/Images/p5.jpg'),
            name: 'شركه عقارات',
            num: 'اكثر من 100 شركه'

        },
        {
            image: require('../../assets/Images/p6.jpg'),
            name: 'شركه تنفيذ الديكورات',
            num: 'اكثر من 100 شركه'

        },
        {
            image: require('../../assets/Images/p5.jpg'),
            name: 'شركه التعمير والاسكان',
            num: 'اكثر من 100 شركه'

        },
        {
            image: require('../../assets/Images/p6.jpg'),
            name: 'شركه عقارات',
            num: 'اكثر من 100 شركه'

        },
        {
            image: require('../../assets/Images/p5.jpg'),
            name: 'شركه تنفيذ الديكورات',
            num: 'اكثر من 100 شركه'

        },
        {
            image: require('../../assets/Images/p6.jpg'),
            name: 'شركه التعمير والاسكان',
            num: 'اكثر من 100 شركه'

        }
    ]
    return (
        <div style={{ marginTop: '35%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ height: 30, width: 2, backgroundColor: '#4A4A4A' }}></div>
                <h6 style={{ color: '#158880', marginRight: 10 }}>شركات خدمات المقاولات القريبه منك </h6>
            </div>

            <Row style={{ margin: '5%' }}>

                {
                    data.map(dat => {
                        return (
                            <Col lg='4'>
                                <Link to={{ pathname: '/ServiceDetailes' }}>
                                    <Card inverse style={{ backgroundColor: 'black', marginTop: 5, }}>
                                        <CardImg width="100%" height='100%' src={dat.image} style={{ opacity: '.5' }} />
                                        <CardImgOverlay style={{ top: '50%' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', }}>
                                                <big style={{ fontSize: 18 }}>{dat.name}</big>
                                                <small style={{ color: 'white', fontSize: 10 }}>{dat.num}</small>
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

export default ContractingServCompany
