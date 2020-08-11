import React, { useState } from 'react'
import { Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function NavBar() {
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <Nav style={{ width: '100%', backgroundColor: '#4A4A4A', height: '100px', display: 'flex', alignItems: 'center', }}>
            <div style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}>

                <img src={require('../../assets/Images/logo.png')} style={{ width: '30%', height: '70%', }} />
                <div style={{ height: '30%', width: 1, backgroundColor: '#33dacf', marginRight: '5%', display: 'flex', color: '#33dacf' }}></div>
                <NavItem >

                    <NavLink href="/Home" style={{ color: '#1CD6C9', fontSize: 14 }}>الرئيسيه</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink href="/MyAdv" style={{ color: 'white', fontSize: 14 }}>اعلاناتي</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink href="/Orders" style={{ color: 'white', fontSize: 14 }}>الطلبات</NavLink>
                </NavItem>
            </div>
            <div style={{ width: '60%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <NavItem >
                    <NavLink href="/SearchMenue" style={{ color: 'white', fontSize: 14 }}>البحث بالقائمه</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink href="/Home" style={{ color: 'white', fontSize: 14 }}>البحث بالخريطه</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink href="/Notify" >
                        <img src={require('../../assets/Images/bell_head.png')} style={{ width: '100%', height: '100%', }} />
                    </NavLink>
                </NavItem>

                <NavItem >
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{ width: 50 }}>

                        <DropdownToggle caret style={{ display: 'flex', alignItems: 'center', backgroundColor: '#4A4A4A', borderColor: '#4A4A4A' }}>
                            <img src={require('../../assets/Images/small_logo.png')} style={{ width: '30%', height: '60%', borderRadius: '150px' }} />
                            <p style={{ color: 'white', marginRight: 5, fontSize: 12, marginTop: 5, marginLeft: 20, }}>اوامر الشبكه</p>
                        </DropdownToggle>
                        <DropdownMenu style={{ borderRadius: 25, overflow: 'hidden', }}>

                            <NavLink href='/MYProfile'>
                                <DropdownItem style={{ textAlign: 'center' }}>الصفحه الشخصيه</DropdownItem>
                            </NavLink>

                            <DropdownItem divider />

                            <DropdownItem style={{ textAlign: 'center' }}>خروج</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
                <NavItem style={{ marginRight: 110 }}>
                    <NavLink href="#" style={{ color: '#1CD6C9', fontSize: 14 }}>english</NavLink>
                </NavItem>
            </div>

        </Nav>
    )
}

export default NavBar
