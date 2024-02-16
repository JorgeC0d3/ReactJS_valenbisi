import Map from './Map'

function Home({dataGroup1, dataGroup2, dataGroup3, lat, lon}) {

    return (
        <div className='container mx-auto p-5'>
            <Map
                data1={dataGroup1}
                data2={dataGroup2}
                data3={dataGroup3}
                lat={lat}
                lon={lon}
            />
        </div>
    )
}

export default Home