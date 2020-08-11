import React from 'react'

function Footer() {
    return (
        <div style={{ width: '100%', flexDirection: 'column', height: 310, backgroundColor: '#4A4A4A', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <div style={{ display: 'flex', marginTop: 15, alignItems: 'center', justifyContent: 'center', width: '30%', flexDirection: 'column', top: 0 }}>
                <img src={require('../../assets/Images/logo.png')} style={{ width: '50%', height: '50%', }} />
                <h6 style={{ color: '#BFBFBF', marginTop: 30, fontSize: 10 }}>هذا النص هو مثال يمكن ان يستبدل في نفس المساحه لقد تم توليد توليد هذا النص من مولد تنصيب المولد العربي</h6>
                <div style={{ flexDirection: 'row', marginTop: 10, display: 'flex', alignItems: 'center', }}>
                    <img src={require('../../assets/Images/facebook.png')} style={{ width: '15%', height: '80%', marginBottom: 5, marginLeft: 5 }} />
                    <img src={require('../../assets/Images/twitter.png')} style={{ width: '15%', height: '100%', }} />
                    <img src={require('../../assets/Images/linked.png')} style={{ width: '15%', height: '100%', }} />
                    <img src={require('../../assets/Images/insta.png')} style={{ width: '15%', height: '100%', }} />
                    <img src={require('../../assets/Images/snapchat.png')} style={{ width: '15%', height: '100%', }} />

                </div>

            </div>
            <div style={{ width: '80%', height: 1, opacity: '.3', backgroundColor: 'black', marginTop: 30 }}></div>
            <div style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, display: 'flex', alignItems: 'center', width: '80%', }}>
                <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <p style={{ color: '#BFBFBF', fontSize: 12 }}> عن الموقع  </p>
                    <p style={{ color: '#BFBFBF', fontSize: 12, marginRight: 10, marginLeft: 10 }}>-</p>
                    <p style={{ color: '#BFBFBF', fontSize: 12 }}> تواصل معنا </p>
                    <p style={{ color: '#BFBFBF', fontSize: 12, marginRight: 10, marginLeft: 10 }}>-</p>

                    <p style={{ color: '#BFBFBF', fontSize: 12 }}>سياسه الموقع</p>
                    <p style={{ color: '#BFBFBF', fontSize: 12, marginRight: 10, marginLeft: 10 }}>-</p>

                    <p style={{ color: '#BFBFBF', fontSize: 12 }}>تحميل التطبيق</p>
                </div>

                <div style={{}}>
                    <p style={{ color: '#BFBFBF', fontSize: 12, }}>جميع الحقوق محفوظه</p>

                </div>

            </div>
        </div>
    )
}

export default Footer
