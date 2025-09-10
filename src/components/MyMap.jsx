import React, { Component } from 'react'
import  { MapContainer, GeoJSON } from "react-leaflet"
import Resto from './../data/RestoMapaq.json'
import 'leaflet/dist/leaflet.css'

class MyMap extends Component {
    state = {}
componentDidMount() {
    console.log(Resto)
}

    render() {
        return (
        <div>
            <h1 style = {{textAlign: "center"}}>Projet : croisement entre infraction MAPAQ et Reviews utilisateurs google</h1>
            <MapContainer style={{height:"80vh"}} zoom={5} center={[46,-76]}>
                <GeoJSON data={Resto} />
            </MapContainer>
        </div>
    )
    }
}

export default MyMap;