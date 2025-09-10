import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css'
import { MapContainer } from 'react-leaflet'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'


function Map() {
  return (
    <div className="App">
<<<<<<< HEAD
      <MapContainer center={[46, -76]} zoom={13} scrollWheelZoom={true}>
=======
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
>>>>>>> 7b6ae924f3fef6984fbe12e21249d02a727b1b83
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
<<<<<<< HEAD
            <Marker position={[46, -76]}>
=======
            <Marker position={[51.505, -0.09]}>
>>>>>>> 7b6ae924f3fef6984fbe12e21249d02a727b1b83
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
    </div>
  );
}


<<<<<<< HEAD

=======
>>>>>>> 7b6ae924f3fef6984fbe12e21249d02a727b1b83
export default function App() {
  return (
    <div>
      <h1>Projet : croisement entre infraction MAPAQ et Reviews utilisateurs google</h1>
      <Map />
    </div>
  );
}
