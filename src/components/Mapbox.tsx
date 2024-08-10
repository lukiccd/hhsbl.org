import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import LocationIcon from "../../public/location.svg";

mapboxgl.accessToken = 'pk.eyJ1IjoiZHNhdWhkdSIsImEiOiJjbHRyM2s4czEwYmZkMnFvYnVtYTJ0Z2MxIn0.axoJATiW8ki_AamYPmktHg';


const Mapbox = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(17.191653554857513);
    const [lat, setLat] = useState(44.77246936914284);
    const [zoom, setZoom] = useState(15);
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/dsauhdu/cltr3m1z000le01pcb0me9o7i/draft',
            center: [lng, lat],
            zoom: zoom,
            pitch: 69,
            attributionControl: false,
            logoPosition: 'top-right',
        }).addControl(new mapboxgl.AttributionControl({
            compact: true,
            position: 'top-right'
            // customAttribution: ''
        }));
        new mapboxgl.Marker({
            color: '#ffce50'
        })
            .setLngLat([lng, lat])
            .addTo(map.current)
    });
    return (
        <div className='relative'>
            <center><div ref={mapContainer} className="map-container h-[60vh] mt-10 w-[80vw] xl:h-[627px] xl:w-[1200px] rounded-[30px] my-10" /></center>
            <div className='md:absolute bottom-10 pb-10 pt-24 ps-14 rounded-[30px] md:flex flex-col justify-end  bg-mapLinearBg w-full hidden '>
                <h3 className='text-white text-2xl font-normal'>Локација храма</h3>
                <div className='md:flex md:flex-row md:justify-start md:items-center gap-5 '>
                    <p className='text-white text-3xl font-bold'>Трг српских владра 3, Бања Лука 78 000</p>
                    <Link href={''}> <Image src={LocationIcon} width={50} height={50} alt={''}></Image></Link>
                </div>
            </div>
        </div>
    );
}

export default Mapbox