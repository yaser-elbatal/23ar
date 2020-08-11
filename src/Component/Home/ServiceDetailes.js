import React, { useState } from 'react'
import AdNavBar from '../advertising/AdNavBar'
import { UncontrolledCarousel, Row, Col, Card, CardBody, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import GMap from "../../common/GMap";
import Subscription from './Subscription';
import Clients from './Clients';
import Footer from './Footer';

const AnyReactComponent = ({ text }) => <p>{text}</p>
function ServiceDetailes() {
    const items = [
        {
            src: require('../../assets/Images/p8.jpg'),
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
            <Row style={{ margin: '7%', marginBottom: 0 }}>
                <Col>
                    <Card >
                        <CardBody >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 50 }}>
                                <h6 style={{ fontWeight: 'bold', }}>اسم شركه المقاولات</h6>
                                <h7 style={{ color: 'black', marginTop: 20 }}>مواصفات الشركه</h7>
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
                                <h7 style={{ color: 'black', marginTop: 20, fontWeight: 'bold', }}>طرق التواصل</h7>


                                <div style={{ flexDirection: 'row', display: 'flex', marginTop: 15 }}>
                                    <img src={require('../../assets/Images/phone (3).png')} style={{ width: 15, height: 15, }} />
                                    <p style={{ color: '#959595', fontSize: 10, paddingRight: 10 }}> 212587436211</p>
                                </div>

                                <div style={{ flexDirection: 'row', display: 'flex', }}>
                                    <img src={require('../../assets/Images/mail (7).png')} style={{ width: 15, height: 15, }} />
                                    <p style={{ color: '#959595', fontSize: 10, paddingRight: 10 }}> 212587436211</p>
                                </div>

                                <div style={{ flexDirection: 'row', display: 'flex', }}>
                                    <img src={require('../../assets/Images/pa.png')} style={{ width: 15, height: 15, }} />
                                    <p style={{ color: '#959595', fontSize: 10, paddingRight: 10 }}> twitter /at</p>
                                </div>
                                <h7 style={{ color: 'black', marginTop: 10, fontWeight: '600', }}>الموقع الالكتروني</h7>

                                <div style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }}>
                                    <img src={require('../../assets/Images/website.png')} style={{ width: 15, height: 15, }} />
                                    <p style={{ color: '#959595', fontSize: 10, paddingRight: 10 }}> www.molat.com</p>
                                </div>
                                <h6 style={{ fontWeight: 'bold', fontSize: 14, marginTop: 30 }}>تحميل التطبيق من المتاجر</h6>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                                    <Link style={{ width: '190px', height: '60px', backgroundColor: '#267366', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                        <img src={require('../../assets/Images/android.png')} style={{ width: 30, height: 30 }} />
                                        <h7 style={{ color: 'white', fontSize: 12, paddingRight: 5, }}>Google Play</h7>
                                    </Link>
                                    <Link style={{ width: '190px', height: '60px', backgroundColor: '#1CD6C9', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginRight: 15 }}>
                                        <img src={require('../../assets/Images/apple.png')} style={{ width: 30, height: 30 }} />
                                        <h7 style={{ color: 'white', fontSize: 14, paddingRight: 10, }}>App store</h7>
                                    </Link>
                                </div>
                            </div>

                        </CardBody>

                    </Card>
                </Col>
            </Row>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginRight: '120px', marginTop: 20, marginLeft: '150px', flexDirection: 'column' }}>
                <h6 style={{ fontWeight: 'bold', fontSize: 12, }}>عنوان الشركه</h6>
                <div style={{ marginTop: 30, }}>
                    <img src={require('../../assets/Images/bg_map.png')} style={{ width: '100%', height: '350px' }} />
                </div>

            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 60 }}>
                <div style={{ height: 30, width: 2, backgroundColor: '#4A4A4A' }}></div>
                <h6 style={{ color: '#158880', marginRight: 10, fontSize: 20, }}>سابقه اعمال </h6>
            </div>
            <Row style={{ margin: '4%' }}>
                <Col lg='4'>

                    <Card>
                        <CardImg src={require('../../assets/Images/p7.jpg')} width="100%" />
                    </Card>
                </Col>
                <Col lg='4'>
                    <Card>
                        <CardImg src={require('../../assets/Images/p6.jpg')} width="100%" />
                    </Card>                </Col>
                <Col lg='4'>
                    <Card>
                        <CardImg src={require('../../assets/Images/p5.jpg')} width="100%" />
                    </Card>                </Col>
                <Col lg='4'>
                    <Card>
                        <CardImg src={require('../../assets/Images/p3.jpg')} width="100%" />
                    </Card>                </Col>
                <Col lg='4'>
                    <Card>
                        <CardImg src={require('../../assets/Images/p2.jpg')} width="100%" />
                    </Card>
                </Col>
                <Col lg='4'>
                    <Card>
                        <CardImg src={require('../../assets/Images/p7.jpg')} width="100%" />
                    </Card>
                </Col>

            </Row>
            <Subscription />
            <Clients />
            <Footer />
        </div >
    );
}

export default ServiceDetailes
