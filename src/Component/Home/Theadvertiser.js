import React from 'react'
import AdNavBar from '../advertising/AdNavBar'
import { CardBody, Card, Col, Row, CardImg } from 'reactstrap'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Theadvertiser() {

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
            <Row style={{ margin: '10%', marginBottom: 0 }}>
                <Col lg='12'>
                    <Card style={{ borderColor: 'white', shadowColor: 'black', boxShadow: '1px 1px 1px 1px #F2F2F2' }}>

                        <CardBody>
                            <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>

                                <div style={{ flexDirection: 'column', display: 'flex', width: '20%' }}>
                                    <img src={require('../../assets/Images/yass.jpg')} style={{ width: '100%', height: '230px', }} />
                                </div>

                                <div style={{ alignItems: 'flex-start', width: '60%', display: 'flex', flexDirection: 'column', marginRight: '2%' }}>
                                    <h6 style={{ color: '#959595', fontSize: 16 }}>اسم الملعن</h6>
                                    <h7 style={{ color: '#959595' }}>ايجارات للبيع - شقق للبيع</h7>

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

                                    <h6 style={{ color: '#959595', fontSize: 12 }}>تفاصيل اخري</h6>
                                    <p className="text-muted" style={{ color: '#959595', fontSize: 10, }}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                    إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
                                      </p>

                                    <p className="text-muted" style={{ color: '#959595', fontSize: 10, }}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                    إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
                                   </p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
            <div style={{ display: 'flex', marginTop: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ height: 30, width: 2, backgroundColor: '#4A4A4A' }}></div>
                <h5 style={{ color: '#158880', marginRight: 10 }}>اعلانات المعلن</h5>
            </div>
            <Row style={{ margin: '5%' }}>
                {
                    data.map(re => {
                        return (
                            <Col lg='4'>
                                <Link className='nav-link' to={{ pathname: '/CityDetailes' }} >
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
                                </Link>

                            </Col>
                        )
                    })
                }

            </Row>
            <Footer />
        </div>
    )
}

export default Theadvertiser
