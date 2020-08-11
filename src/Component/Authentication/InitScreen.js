import React from 'react'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Animated } from "react-animated-css";
import { Link } from 'react-router-dom';

function InitScreen() {
    return (
        <div >
            <div style={{ position: 'relative', }}>
                <img src={require('../../assets/Images/bg_map.png')} style={{ opacity: .3, width: '100%', }} />

            </div>
            <Container >
                <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={require('../../assets/Images/biglogo.png')} style={{ width: '15%', height: '40%', }} />
                    <Link to={{ pathname: '/login' }} className="nav-link" style={{ backgroundColor: '#1CD6C9', margin: 10, padding: 10, paddingRight: 30, paddingLeft: 30 }}>
                        <h7 style={{ color: 'white' }}>تسجيل دخول</h7>
                    </Link>

                </div>
            </Container>
        </div>
    )
}

export default InitScreen
