import React from 'react'
import AdNavBar from '../advertising/AdNavBar'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'

function Orders() {
    return (
        <div>
            <AdNavBar />
            <div style={{ flexDirection: 'row', margin: '5%', justifyContent: 'space-between', display: 'flex' }}>
                <h6 style={{ color: '#5B5B5B', fontSize: 16 }}>اشعارات الطلبات</h6>

                <Link to={{ pathname: '/AddOrders' }} className="nav-link" style={{ backgroundColor: '#1CD6C9', height: '50px', paddingLeft: 40, paddingRight: 40, alignItems: 'center', display: 'flex' }}>
                    <h7 style={{ color: 'white', fontSize: 12 }}>اضافه طلب</h7>
                </Link>
            </div>
            <div style={{ flexDirection: 'row', margin: '5%', display: 'flex', alignItems: 'center' }}>
                <img src={require('../../assets/Images/bell_vic.png')} style={{ width: 30, height: 30, }} />
                <h6 style={{ color: '#959595', fontSize: 12, marginRight: 20 }}>تم العثور علي طلبك بتاريخ 30/6</h6>

            </div>
            <div style={{ flexDirection: 'row', margin: '5%', display: 'flex', alignItems: 'center' }}>
                <img src={require('../../assets/Images/bell_vic.png')} style={{ width: 30, height: 30, }} />
                <h6 style={{ color: '#959595', fontSize: 12, marginRight: 20 }}>تم العثور علي طلبك بتاريخ 30/6</h6>

            </div>
            <div style={{ flexDirection: 'row', margin: '5%', display: 'flex', alignItems: 'center' }}>
                <img src={require('../../assets/Images/bell_vic.png')} style={{ width: 30, height: 30, }} />
                <h6 style={{ color: '#959595', fontSize: 12, marginRight: 20 }}>تم العثور علي طلبك بتاريخ 30/6</h6>

            </div>
            <div style={{ flexDirection: 'row', margin: '5%', display: 'flex', alignItems: 'center' }}>
                <img src={require('../../assets/Images/bell_vic.png')} style={{ width: 30, height: 30, }} />
                <h6 style={{ color: '#959595', fontSize: 12, marginRight: 20 }}>تم العثور علي طلبك بتاريخ 30/6</h6>

            </div>
            <Footer />
        </div>
    )
}

export default Orders
