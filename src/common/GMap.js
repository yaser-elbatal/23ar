import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import { googleMapToken } from '../../../constants/environment'

const AnyReactComponent = ({ text }) => <div style={{ backgroundColor: 'black', width: 60, height: 30, borderRadius: 30, alignItems: 'center', justifyContent: 'cebter', display: 'flex', borderBottomRightRadius: 0 }}>
    <p style={{ color: 'white', textAlign: 'center', marginRight: 10, marginTop: 15 }}>{text}</p></div>;

class SimpleMap extends Component {

    async componentDidMount() {

    }

    // static defaultProps = {
    //   center: {
    //     lat: this.props.lat,
    //     lng: this.props.lng
    //   },
    //   zoom: 11
    // };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '75vh', width: '100%', position: 'absolute', }}>


                <GoogleMapReact
                    // bootstrapURLKeys={{ key: googleMapToken }}
                    bootstrapURLKeys={{ key: "AIzaSyBa6F73tNUJygFHnBmcHGrVwRuLVfro3Yo" }}
                    // defaultCenter={this.props.center}
                    defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
                    defaultZoom={16 || this.props.zoom}
                >

                    <AnyReactComponent
                        lat={this.props.lat}
                        lng={this.props.lng}
                        text="1.7 مليون"
                    />

                    <AnyReactComponent
                        lat={this.props.lat1}
                        lng={this.props.lng1}
                        text="1.5 مليون"
                    />

                    <AnyReactComponent
                        lat={this.props.lat2}
                        lng={this.props.lng2}
                        text="5.5 مليون"
                    />
                    <AnyReactComponent
                        lat={this.props.lat3}
                        lng={this.props.lng3}
                        text=".5 مليون"
                    />

                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;