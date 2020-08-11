import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
    return (


        <div style={{ margin: '10%' }}>
            <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>

                <div style={{ flexDirection: 'column', display: 'flex', position: 'relative', width: '20%' }}>
                    <img src={require('../../assets/Images/yass.jpg')} style={{ width: '100%', height: '230px', }} />
                    <Link to={{ pathname: '/EditInfo' }} className="nav-link" style={{ backgroundColor: '#1CD6C9', height: '40px', width: '80%', alignItems: 'center', marginRight: 17, position: 'absolute', marginTop: '210px' }}>
                        <h7 style={{ color: 'white', fontSize: 12 }}> تعديل المعلومات</h7>
                    </Link>
                </div>

                <div style={{ alignItems: 'flex-start', width: '60%', display: 'flex', flexDirection: 'column', marginRight: '2%' }}>
                    <h6 style={{ color: '#959595', fontSize: 16 }}>اسم الملعن</h6>
                    <small className="text-muted" style={{ color: '#959595' }}>ايجارات للبيع - شقق للبيع</small>

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
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '20%', flexDirection: 'row' }}>

                    <Link to={{ pathname: '/AddAdver' }} className="nav-link" style={{ backgroundColor: '#1CD6C9', height: '45px', width: '180px', alignItems: 'center', justifyContent: 'center' }}>
                        <h7 style={{ color: 'white', fontSize: 12 }}>اضافه اعلان</h7>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile
