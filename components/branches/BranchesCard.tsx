'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';
const BranchesCard = ({ location, title, description, href }: any) => {
    return (
        <div>
            <div className="basis-1/2">
                <MapContainer className="h-[150px] rounded-lg" center={location} zoom={16} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={location}>
                        <Popup>
                            Hi
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className="basis-1/2 text-end pe-2">
                <div>
                    <h5 className=" font-bold mb-1 dark:text-slate-50">{title}</h5>
                    <p className="text-sm text-gray-700 dark:text-slate-200">{description}</p>
                    <a className="btn float-start flex flex-row flex-row-reverse mt-2" href={href}>
                        مسیریابی
                        <Image width={25} height={20} src="https://img.icons8.com/ios/50/marker--v1.png" alt="Gps" />
                    </a>
                </div>

            </div>
        </div>
    )
}
export default BranchesCard;