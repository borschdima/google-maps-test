import { useRef, useState } from 'react';

import GoogleMap from 'google-maps-react-markers';

import Marker from './Marker/Marker';

import './App.css';

const coordinates = [
  [
    {
      lat: 45.4046987,
      lng: 12.2472504,
      name: 'Venice',
    },
    {
      lat: 41.9102415,
      lng: 12.3959151,
      name: 'Rome',
    },
    {
      lat: 45.4628328,
      lng: 9.1076927,
      name: 'Milan',
    },
  ],
  [
    {
      lat: 40.8518,
      lng: 14.2681,
      name: 'Naples',
    },
    {
      lat: 43.7696,
      lng: 11.2558,
      name: 'Florence',
    },
    {
      lat: 37.5023,
      lng: 15.0873,
      name: 'Catania',
    },
  ],
];

const App = () => {
  const mapRef = useRef(null);
  const [, setMapReady] = useState(false);
  const [mapBounds, setMapBounds] = useState({});

  const [highlighted, setHighlighted] = useState(null);

  const onGoogleApiLoaded = ({ map }) => {
    mapRef.current = map;
    setMapReady(true);
  };


  const onMarkerClick = (e, { markerId }) => {
    setHighlighted(markerId);
  };

  const onMapChange = ({ bounds, zoom }) => {
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
 
    setMapBounds({ ...mapBounds, bounds: [sw.lng(), sw.lat(), ne.lng(), ne.lat()], zoom });
    setHighlighted(null);
  };

  return (
    <main>
      <div className="map-container">
        <GoogleMap
          apiKey={API_KEY}
          defaultCenter={{ lat: 45.4046987, lng: 12.2472504 }}
          defaultZoom={5}
          mapMinHeight="600px"
          onGoogleApiLoaded={onGoogleApiLoaded}
          onChange={onMapChange}
        >
          {coordinates[0].map(({ lat, lng, name }, index) => (
            <Marker
              key={index}
              lat={lat}
              lng={lng}
              markerId={name}
              onClick={onMarkerClick}
              className="marker"
              // draggable={true}
              // onDragStart={(e, { latLng }) => {}}
              // onDrag={(e, { latLng }) => {}}
              // onDragEnd={(e, { latLng }) => {}}
            />
          ))}
        </GoogleMap>

        {highlighted && (
          <div className="highlighted">
            {highlighted}{' '}
            <button type="button" onClick={() => setHighlighted(null)}>
              X
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
