import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import icon from '../assets/images/icon.png'


function BiciMarker({ data }) {

    const customIcon = new Icon({
        iconUrl: icon,
        iconSize: [40, 40]
    })

    return (

        <Marker position={[data.geo_point_2d.lat, data.geo_point_2d.lon]} icon={customIcon}>
            <Popup>

                {
                    data.open === 'T' ? (
                        <span className='text-green-500'>Estacion abierta</span>
                    ) : (
                        <span className='text-red-500'>Estacion cerrada</span>
                    )
                }

                <br /> {data.address} <br /> Bicis disponibles: {data.available} <br /> Huecos libres: {data.free} <br /> Última actualización: {data.updated_at}
            </Popup>
        </Marker>
    )
}

export default BiciMarker