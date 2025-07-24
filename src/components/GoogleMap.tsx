'use client';

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const GoogleMap = () => {
  const position = { lat: -5.941418417024262, lng: -35.25115272473362 };
  const placeName = "DELCA Construções";
  const placeAddress = "Estrada pra pium, 2011 - Cajupiranga, RN";
  const googleMapsUrl = `https://www.google.com/maps/place/DELCA+Material+de+Constru%C3%A7%C3%A3o/@-5.941464,-35.2512114,20.25z/data=!4m12!1m5!3m4!2zNcKwNTYnMjkuMSJTIDM1wrAxNScwNC4yIlc!8m2!3d-5.9414184!4d-35.2511527!3m5!1s0x7b2578702be1e7b:0x12fcdaf5d2f42efc!8m2!3d-5.9414779!4d-35.2511315!16s%2Fg%2F11b6tbwgy2?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D`;

  const [infoWindowOpen, setInfoWindowOpen] = useState(true );
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-200">
        <p className="text-red-500">A chave da API do Google Maps não foi encontrada.</p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div className="relative w-full h-full">
        <Map
          style={{ width: '100%', height: '100%' }}
          defaultCenter={position}
          defaultZoom={17}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId="c6f0f1b3e0bae139f62c2615"
        >
          <AdvancedMarker 
            position={position} 
            onClick={() => setInfoWindowOpen(true)}
            title={placeName}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-12 h-12 bg-red-500/30 rounded-full animate-ping" />
              <Pin 
                background={'#EF4444'}
                borderColor={'#B91C1C'}
                glyphColor={'#FFFFFF'}
              />
            </div>
          </AdvancedMarker>

          {infoWindowOpen && (
            <InfoWindow
              position={position}
              pixelOffset={[0, -50]}
              onCloseClick={() => setInfoWindowOpen(false)}
            >
              <div className="p-2 font-sans text-gray-800">
                <p className="text-lg font-bold">{placeName}</p>
                <p className="text-sm mb-3">{placeAddress}</p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-delca-blue text-white font-semibold rounded-md hover:bg-delca-blue/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Rotas
                </a>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};

export default GoogleMap;
