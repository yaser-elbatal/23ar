import React from 'react'
import AdNavBar from '../advertising/AdNavBar'
import { UncontrolledCarousel, Row, Col, Card, CardBody, CardImg } from 'reactstrap';
import Subscription from './Subscription';
import Clients from './Clients';
import Footer from './Footer';
import { NavLink, Link } from 'react-router-dom';

function CityDetailes() {

    const items = [
        {
            src: require('../../assets/Images/p4.jpg'),
            key: '1'
        },
        {
            src: require('../../assets/Images/p1.jpg'),
            key: '2'
        },
        {
            src: require('../../assets/Images/p2.jpg'),
            key: '3'
        }
    ];

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
            <AdNavBar />
            <UncontrolledCarousel items={items} />
            <Row style={{ margin: '5%', marginBottom: 0 }}>
                <Col lg='11'>
                    <Card style={{ height: '100px', borderColor: 'white', shadowColor: 'black', boxShadow: '4px 1px 4px 1px #F2F2F2' }}>
                        <CardBody style={{ height: '100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                                <div>
                                    <h5 style={{ color: '#1CD6C9' }}>10 رس</h5>
                                </div>
                                <div style={{ backgroundColor: '#BDBDBD', height: '100px', width: '.1px', opacity: .3, marginLeft: 15, marginRight: 15 }}></div>
                                <h6 style={{ color: '#BDBDBD' }}>الغرف</h6>
                                <img src={require('../../assets/Images/bed.png')} style={{ width: 30, height: 30, marginRight: 15, marginLeft: 15 }} />
                                <h6 style={{ fontSize: 24 }}>2</h6>
                                <div style={{ backgroundColor: '#BDBDBD', height: '100px', width: '.1px', opacity: .3, marginLeft: 15, marginRight: 15 }}></div>
                                <h6 style={{ color: '#BDBDBD' }}>الحمام</h6>
                                <img src={require('../../assets/Images/bathtub.png')} style={{ width: 30, height: 30, marginRight: 15, marginLeft: 15 }} />
                                <h6 style={{ fontSize: 24 }}>1</h6>
                                <div style={{ backgroundColor: '#BDBDBD', height: '100px', width: '.1px', opacity: .3, marginLeft: 15, marginRight: 15 }}></div>
                                <h6 style={{ color: '#BDBDBD' }}>مكيف</h6>
                                <img src={require('../../assets/Images/air_conditioner.png')} style={{ width: 30, height: 30, marginRight: 15, marginLeft: 15 }} />
                                <h6 style={{ fontSize: 24 }}>2</h6>
                                <div style={{ backgroundColor: '#BDBDBD', height: '100px', width: '.1px', opacity: .3, marginLeft: 15, marginRight: 15 }}></div>
                                <h6 style={{ color: '#BDBDBD' }}>مطبخ</h6>
                                <img src={require('../../assets/Images/chef.png')} style={{ width: 30, height: 30, marginRight: 15, marginLeft: 15 }} />
                                <h6 style={{ fontSize: 24 }}>1</h6>
                                <div style={{ backgroundColor: '#BDBDBD', height: '100px', width: '.1px', opacity: .3, marginLeft: 15, marginRight: 15 }}></div>
                                <h6 style={{ color: '#BDBDBD' }}>مصعد</h6>
                                <img src={require('../../assets/Images/elevator.png')} style={{ width: 30, height: 30, marginRight: 15, marginLeft: 15 }} />
                                <h6 style={{ fontSize: 24 }}>1</h6>
                                <div style={{ backgroundColor: '#BDBDBD', height: '100px', width: '.1px', opacity: .3, marginLeft: 15, marginRight: 15 }}></div>
                                <h6 style={{ color: '#BDBDBD' }}>عمر</h6>
                                <h6 style={{ fontSize: 14, paddingRight: 10, paddingLeft: 10 }}>5 سنين</h6>
                                <div style={{ backgroundColor: '#BDBDBD', height: '100px', width: '.1px', opacity: .3, marginLeft: 35, marginRight: 15 }}></div>
                                <h6 style={{ color: '#BDBDBD' }}>الدور</h6>
                                <h6 style={{ fontSize: 14, paddingRight: 10, paddingLeft: 10 }}>علوي</h6>

                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row style={{ margin: '5%', marginBottom: 0 }}>
                <Col lg='11'>
                    <Card style={{ borderColor: 'white', shadowColor: 'black', boxShadow: '4px 1px 4px 1px #F2F2F2' }}>
                        <CardBody>

                            <div style={{ flexDirection: 'column', display: 'flex', }}>
                                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-end', bottom: '5%' }}>
                                    <img src={require('../../assets/Images/redfav.png')} style={{ width: 40, height: 40 }} />
                                    <img src={require('../../assets/Images/fav.png')} style={{ width: 40, height: 40, marginLeft: 10, marginRight: 10 }} />
                                    <img src={require('../../assets/Images/shareads.png')} style={{ width: 40, height: 40 }} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                    <h6 style={{ color: 'red' }}>للايجار</h6>
                                    <h6 style={{ color: '#BDBDBD' }}>22 دقيقه</h6>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <h6>فيلا كبيره بحمام سباحه</h6>
                                    <img src={require('../../assets/Images/seen.png')} style={{ width: 20, height: 20, marginLeft: 15, marginRight: 15 }} />
                                    <h7 style={{ color: '#BDBDBD' }}>555</h7>
                                </div>
                                <div style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }}>
                                    <img src={require('../../assets/Images/yellowstar.png')} style={{ width: 15, height: 15 }} />
                                    <img src={require('../../assets/Images/yellowstar.png')} style={{ width: 15, height: 15 }} />
                                    <img src={require('../../assets/Images/yellowstar.png')} style={{ width: 15, height: 15 }} />
                                    <img src={require('../../assets/Images/yellowstar.png')} style={{ width: 15, height: 15 }} />
                                    <img src={require('../../assets/Images/wstar.png')} style={{ width: 15, height: 15 }} />
                                </div>
                                <div style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }}>
                                    <h7 style={{ color: '#BDBDBD', paddingLeft: 10, }}>رقم الاعلان</h7>
                                    <h7>12324</h7>
                                </div>
                                <div style={{ display: 'flex', marginTop: 10 }}>
                                    <h6>مواصفات الشقه</h6>
                                </div>
                                <div style={{ marginTop: 10, fontSize: 12, color: '#BDBDBD' }}>
                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق، إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد...هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،
                                </div>
                                <div style={{ marginTop: 10, fontSize: 12, color: '#BDBDBD' }}>
                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق، إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد...هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،
                                </div>
                                <div style={{ marginTop: 10, fontSize: 12, color: '#BDBDBD' }}>
                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق، إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد...هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،
                                </div>
                                <div style={{ marginTop: 10, fontSize: 12, color: '#BDBDBD' }}>
                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق، إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد...هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،
                                </div>

                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row style={{ margin: '5%', marginBottom: 0, marginTop: 20 }}>
                <Col lg='11'>
                    <Link activeClassName="selected" className='nav-link' to={{ pathname: '/Theadvertiser' }}>
                        <Card style={{ borderColor: 'white', shadowColor: 'black', boxShadow: '4px 1px 4px 1px #F2F2F2' }}>
                            <CardBody>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <img src={require('../../assets/Images/yass.jpg')} style={{ width: 50, height: 50, borderRadius: 50 }} />
                                    <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                                        <h6 style={{ color: 'black' }}>اسم المعلن</h6>
                                        <h7 style={{ color: '#BDBDBD' }}>09645213254789</h7>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Link>

                </Col>
            </Row>

            <div style={{ marginRight: '6%', float: 'right', marginTop: 30 }}>
                <h6>الموقع والخدمات المجاوره</h6>
            </div>
            <Row style={{ margin: '5%' }}>
                {
                    data.map(re => {
                        return (
                            <Col lg='4'>
                                <Card style={{ marginTop: 10, overflow: 'hidden' }}>
                                    <CardImg top width="100%" src={re.image} alt="Card image cap" />

                                    <CardBody style={{ flex: 1, }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <p style={{ color: 'red', fontSize: 12 }}>{re.rent}</p>
                                                <p style={{ color: '#BFBFBF', fontSize: 12, }}>{re.min}</p>
                                            </div>

                                            <h6 style={{ color: 'black', fontSize: 16, alignSelf: 'end', }}>{re.filla}</h6>

                                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                                <img src={require('../../assets/Images/locationgray.png')} style={{ width: 15, height: 15, }} />
                                                <h6 style={{ color: '#BFBFBF', fontSize: 12, alignSelf: 'end', }}>{re.site}</h6>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%', marginTop: 10 }}>
                                                <h7 style={{ color: '#158880', fontSize: 12, }}>{re.romm}</h7>
                                                <h7 style={{ color: '#158880', fontSize: 12, }}>{re.Hall}</h7>
                                                <h7 style={{ color: '#158880', fontSize: 12, }}>{re.bath}</h7>
                                            </div>

                                            <div style={{ width: '100%', backgroundColor: 'black', height: '.5px', marginTop: 30, opacity: .1 }}></div>
                                            <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                                    <img src={re.tar} style={{ height: 30, width: 30, borderRadius: 50 }} />
                                                    <h6 style={{ color: '#4B4B4B', fontSize: 12, marginRight: 10 }}>{re.name}</h6>

                                                </div>
                                                <h6 style={{ color: '#1CD6C9', fontSize: 16 }}>{re.price}</h6>

                                            </div>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })
                }

            </Row>
            <Subscription />
            <Clients />
            <Footer />
        </div>
    )
}

export default CityDetailes
