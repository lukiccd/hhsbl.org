import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoiZHNhdWhkdSIsImEiOiJjbHRyM2s4czEwYmZkMnFvYnVtYTJ0Z2MxIn0.axoJATiW8ki_AamYPmktHg';


const Mapbox = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(17.191653554857513);
    const [lat, setLat] = useState(44.77246936914284);
    const [zoom, setZoom] = useState(9);
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/dsauhdu/cltr3m1z000le01pcb0me9o7i/draft',
            center: [lng, lat],
            zoom: zoom
        });
    });
    return (
        <div>
            <center><div ref={mapContainer} className="map-container h-[427px] w-[758px]" /></center>
        </div>
    );
}

export default Mapbox