import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import icon from '../assets/images/icon_user.png'


function UserMarker({ lat, lon }) {

    const customIcon = new Icon({
        iconUrl: icon,
        iconSize: [24, 24]
    })

    return (

        <Marker position={[lat, lon]} icon={customIcon}>
            <Popup>
                Tu posición<br /> Lat: {lat} <br />Lon: {lon}
            </Popup>
        </Marker>
    )
}

export default UserMarker