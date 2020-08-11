import React from 'react'
import AdNavBar from './AdNavBar'
import { UncontrolledCarousel, Row, Col, Card, CardBody } from 'reactstrap'
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer';


const AnyReactComponent = ({ text }) => <div style={{ backgroundColor: 'black', width: 70, height: 30, borderRadius: 30, alignItems: 'center', justifyContent: 'center', display: 'flex', borderBottomRightRadius: 0 }}>
    <h6 style={{ color: 'white', textAlign: 'center', marginRight: 10, marginTop: 15 }}>{text}</h6></div>;

function PublishAd() {


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

            <Row style={{ margin: '5%', }}>
                <Col lg='11'>
                    <Card style={{ borderColor: 'white', shadowColor: 'black', boxShadow: '4px 1px 4px 1px #F2F2F2' }}>
                        <CardBody>

                            <div style={{ flexDirection: 'column', display: 'flex', }}>

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
                            <div style={{ height: '50vh', width: '100%', }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyBa6F73tNUJygFHnBmcHGrVwRuLVfro3Yo" }}
                                    defaultZoom={11}
                                    defaultCenter={{ lat: 30.06263, lng: 31.24967 }}
                                >
                                    <AnyReactComponent
                                        lat={30.06263}
                                        lng={31.06263}
                                        text="الرياض"
                                    />
                                    <AnyReactComponent
                                        lat={30.063333}
                                        lng={31.24840}
                                        text="المدينه"
                                    />
                                    <AnyReactComponent
                                        lat={30.044281}
                                        lng={31.340002}
                                        text="مكه"
                                    />
                                </GoogleMapReact>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 30 }}>
                                <Link to={{ pathname: '/SuccessAdd' }} className="nav-link" style={{ backgroundColor: '#1CD6C9', height: '50px', width: '150px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                    <h7 style={{ color: 'white', fontSize: 12 }}>تأكيد النشر</h7>
                                </Link>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default PublishAd
