import React from 'react'
import GMap from "../../common/GMap";
import NavBar from './NavBar';
import ContractingServCompany from './ContractingServCompany';
import NewCitiesCompany from './NewCitiesCompany';
import Subscription from './Subscription';
import Footer from './Footer';
import Clients from './Clients';
import SelectSite from '../Search/SelectSite';

function HomePage() {



    return (
        <div>
            <NavBar />
            <GMap
                lat={30.06263}
                lng={31.24967}
                zoom={11}
                lat1={30.044281}
                lng1={31.340002}
                lat2={30.06450}
                lng2={31.24840}
                lat3={30.063333}
                lng3={31.24840} />

            <SelectSite />
            <ContractingServCompany />
            <NewCitiesCompany />
            <Subscription />
            <Clients />
            <Footer />



        </div>

    )
}

export default HomePage
