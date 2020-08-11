import React from 'react'
import NavBar from '../Home/NavBar'

import SelectSite from './SelectSite'
import Footer from '../Home/Footer'
import RentCard from './RentCard'

function SearchMenue() {


    return (
        <div>
            <NavBar />
            <SelectSite />
            <RentCard />
            <Footer />
        </div >
    )
}

export default SearchMenue
