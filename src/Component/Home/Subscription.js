import React from 'react'
import { Input } from 'reactstrap'
import { Link } from 'react-router-dom'

function Subscription() {
    return (
        <div style={{ width: '100%', height: 200, backgroundColor: '#088980', marginTop: 60, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', width: '100%', marginRight: '10%', }}>
                <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', width: '100%' }}>
                    <h6 style={{ color: 'white', }}> يمكنك الاستفاده اولا بالعقارات الفرصه والعروض الخاصه علي الايجار والبيع</h6>
                    <div style={{ display: 'flex', marginTop: 30, width: '100%', alignItems: 'center', flexDirection: 'row' }}>
                        <Input
                            type="search"
                            name="search"
                            id="exampleSearch"
                            placeholder="info.com"
                            style={{ backgroundColor: '#067972', color: 'white', borderColor: '#067972', width: '100%', }}
                        />
                        <Link style={{ backgroundColor: '#1cd6c9', borderColor: '#1cd6c9"', paddingTop: 10, marginRight: 20 }} to={{}}>
                            <p style={{ paddingRight: 30, paddingLeft: 30, color: 'white' }}> اشتراك</p>
                        </Link >

                    </div>

                </div>
                <div style={{ width: '100%' }}>
                    <img src={require('../../assets/Images/undraw_for_sale_viax.png')} style={{ width: '35%', height: '30%', }} />

                </div>

            </div>
        </div>
    )
}

export default Subscription
