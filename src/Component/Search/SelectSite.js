import React from 'react'
import { Row, Col, Card, CardBody, InputGroup, Input, InputGroupAddon, InputGroupText, FormGroup, Label } from 'reactstrap'
import { Link } from 'react-router-dom'

function SelectSite() {
    return (
        <Card style={{ borderColor: 'white', shadowColor: 'black', boxShadow: '1px 1px 1px 1px #F2F2F2', margin: '5%', }}>
            <CardBody >
                <Row form >
                    <Col>
                        <InputGroup>
                            <Input placeholder="موقعي" style={{ borderColor: '#E0E0E0', fontSize: 14, color: '#E0E0E0', }} />
                            <img src={require('../../assets/Images/locationgray.png')} style={{ width: 12, height: 15, position: 'absolute', float: 'left', left: 4, alignSelf: 'center' }} />
                        </InputGroup>
                    </Col>
                    <Col>
                        <FormGroup >
                            <Input type="select" name="نوع العقار" placeholder='نوع العقار' style={{ borderColor: '#E0E0E0', fontSize: 14, }}>
                                <option disabled selected={true}>نوع العقار</option>
                                <option>جديد</option>
                                <option>قديم</option>
                                <option>وسط</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup >
                            <Input type="select" name="نوع العقار" placeholder='نوع العقار' style={{ borderColor: '#E0E0E0', fontSize: 14, }}>
                                <option disabled selected={true}>نوع الخدمه</option>
                                <option>ممتازه</option>
                                <option>جيده</option>
                                <option>مقبوله</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <InputGroup>
                            <Input placeholder="مساحه العقار" style={{ borderColor: '#E0E0E0', fontSize: 14, color: '#E0E0E0', }} />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup>
                            <Input placeholder="مزانيتك من " style={{ borderColor: '#E0E0E0', fontSize: 14, color: '#E0E0E0', }} />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup>
                            <Input placeholder="مزانيتك الي" style={{ borderColor: '#E0E0E0', fontSize: 14, color: '#E0E0E0', }} />
                        </InputGroup>
                    </Col>
                    <Col>

                        <Link to={{ pathname: '' }} className="nav-link" style={{ backgroundColor: '#1CD6C9', height: '40px', paddingLeft: 20, paddingRight: 20, alignItems: 'center', }}>
                            <h7 style={{ color: 'white', fontSize: 12, alignSelf: 'center', }}>بحث</h7>
                        </Link>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default SelectSite
