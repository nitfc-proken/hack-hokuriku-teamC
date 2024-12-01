import { Libraries } from "@googlemaps/js-api-loader";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { CSSProperties, useState, useEffect } from "react";

// 緯度、経度を表すinterface
interface LatLng {
 lat: number;
 lng: number;
}

interface Props {
 positionList: LatLng[];
 centerPosition?: LatLng;
 mapContainerStyle?: CSSProperties;
}

const LocationMap = ({ positionList, centerPosition, mapContainerStyle }: Props) => {
 const [libraries] = useState<Libraries>(["geometry", "drawing"]);
 const { isLoaded } = useJsApiLoader({
  id: "google-map-script",
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || "",
  libraries,
 });

 const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number } | null>(null);

 useEffect(() => {
  if (navigator.geolocation) {
   const watchId = navigator.geolocation.watchPosition(
    (position) => {
     setCurrentPosition({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
     });
    },
    (error) => {
     console.error("位置情報の取得に失敗しました:", error);
    }
   );

   return () => {
    navigator.geolocation.clearWatch(watchId);
   };
  }
 }, []);

 const kanazawaStation: LatLng = { lat: 36.578081827075, lng: 136.6478205667 };

 const fullScreenStyle: CSSProperties = {
  height: "100vh",
  width: "100vw",
 };

 const center = centerPosition || currentPosition || kanazawaStation;

 if (isLoaded) {
  return (
   <GoogleMap mapContainerStyle={mapContainerStyle || fullScreenStyle} center={center} zoom={16} options={{ fullscreenControl: false, mapTypeControl: false, zoomControl: false, streetViewControl: false }}>
    {currentPosition && <MarkerF position={currentPosition} icon={{ path: window.google.maps.SymbolPath.CIRCLE, scale: 8, fillColor: "blue", fillOpacity: 0.6, strokeWeight: 2, strokeColor: "white" }} />}

    {positionList.map((latLng, index) => (
     <MarkerF key={index} position={latLng} />
    ))}
   </GoogleMap>
  );
 } else {
  return <></>;
 }
};

export { LocationMap };
export type { LatLng };
