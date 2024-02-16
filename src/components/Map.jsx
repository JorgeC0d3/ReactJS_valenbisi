import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import BiciMarker from './BiciMarker'
import UserMarker from './UserMarker'

function Map({ data1, data2, data3, lat, lon }) {

    //Como Las coordenadas que le damos a MapContainer son inmutables, con esta función
    //modificamos las coordenadas del usuario.

    function SetViewOnUserCoords({ lat, lon }) {
        const map = useMap();
        map.setView([lat, lon], map.getZoom());
      
        return null;
    }


    return (
       
        <MapContainer center={[39.46890257578731, -0.3783341142817661]} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <UserMarker
                lat={lat}
                lon={lon}
            />

            {
                data1.map((data, i) => {
                    return (
                        <BiciMarker
                            data={data}
                            key={i}
                        />
                    )

                })
            }
            {
                data2.map((data, i) => {
                    return (
                        <BiciMarker
                            data={data}
                            key={i}
                        />
                    )

                })
            }
            {
                data3.map((data, i) => {
                    return (
                        <BiciMarker
                            data={data}
                            key={i}
                        />
                    )

                })
            }
            <SetViewOnUserCoords lat={lat} lon={lon} />
        </MapContainer>
        
        
    )
}

export default Map