import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Table from './components/Table'
import Home from './components/Home'
import About from './components/About'

const Router = () => {

    const [dataGroup1, setDataGroup1] = useState([])
    const [dataGroup2, setDataGroup2] = useState([])
    const [dataGroup3, setDataGroup3] = useState([])
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
   

    const getData1 = async () => {
        const url = 'https://valencia.opendatasoft.com/api/explore/v2.1/catalog/datasets/valenbisi-disponibilitat-valenbisi-dsiponibilidad/records?limit=100'
        const res = await fetch(url)
        const data = await res.json()
        setDataGroup1(data.results)
    }

    const getData2 = async () => {
        const url = 'https://valencia.opendatasoft.com/api/explore/v2.1/catalog/datasets/valenbisi-disponibilitat-valenbisi-dsiponibilidad/records?limit=100&offset=99'
        const res = await fetch(url)
        const data = await res.json()
        setDataGroup2(data.results)
    }

    const getData3 = async () => {
        const url = 'https://valencia.opendatasoft.com/api/explore/v2.1/catalog/datasets/valenbisi-disponibilitat-valenbisi-dsiponibilidad/records?limit=100&offset=199'
        const res = await fetch(url)
        const data = await res.json()
        setDataGroup3(data.results)
    }

    function success(pos) { 
        var crd = pos.coords
        /*
        console.log("Your current position is:")
        console.log(`Latitude : ${crd.latitude}`)
        console.log(`Longitude: ${crd.longitude}`)
        */
        console.log(`More or less ${crd.accuracy} meters.`)
        
        console.log(crd.latitude, crd.longitude)
        setLat(crd.latitude)
        setLon(crd.longitude)
    }

    function errors(err) { 
        console.warn(`ERROR(${err.code}): ${err.message}`)
    }

    var options = { 
        enableHighAccuracy: true, 
        timeout: 5000,
        maximumAge: 0, 
    }

    useEffect(() => {

        getData1()
        getData2()
        getData3()
        console.log(dataGroup1)
        console.log(dataGroup2)
        console.log(dataGroup3)

        if (navigator.geolocation) {
            navigator.permissions.query({ name: "geolocation" })
            .then(function (result) {
                console.log(result)
                if (result.state === "granted") {
                    navigator.geolocation.getCurrentPosition(success, errors, options) 
                    
                } else if (result.state === "prompt") { 
                    navigator.geolocation.getCurrentPosition(success, errors, options) 
                    
                } else if (result.state === "denied") { 
                    //If denied then you have to show instructions to enable location 
                }
            })
        } else {
            console.log("Geolocation is not supported by this browser.")
        }

    }, [dataGroup1.length, dataGroup2.length, dataGroup3.length])

    return (

        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={
                    <Home 
                        dataGroup1={dataGroup1}
                        dataGroup2={dataGroup2}
                        dataGroup3={dataGroup3}
                        lat={lat}
                        lon={lon}
                    />} 
                />
                <Route exact path="/table" element={
                    <Table 
                        dataGroup1={dataGroup1}
                        dataGroup2={dataGroup2}
                        dataGroup3={dataGroup3}
                    />} 
                />
                <Route exact path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router