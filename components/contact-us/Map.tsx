'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Title from '../Title';
function Map() {

    return (
        <div className="container mx-auto w-5/6 lg:w-2/3 py-12">
        <section className="flex justify-center flex-col text-center">
     
                <Title title={'آدرس ما'} />
                <div>
                <MapContainer className="h-[300px] rounded-lg shadow-lg" center={[32.640578, 51.668837]} zoom={14} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[32.640578, 51.668837]}>
            <Popup>
              Hi
            </Popup>
          </Marker>

        </MapContainer>
                </div>
            </section>
            </div>
    );
}


export default Map;
