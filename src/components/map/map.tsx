import { Libraries } from "@googlemaps/js-api-loader";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { CSSProperties, useState, useEffect } from "react";

interface Props {
 lat: number;
 lng: number;
 mapContainerStyle?: CSSProperties;
}

const LocationMap = ({ lat, lng, mapContainerStyle }: Props) => {
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

 // スマホで全画面表示するためのスタイルを設定
 const fullScreenStyle: CSSProperties = {
  height: "100vh",
  width: "100vw",
 };

 if (isLoaded) {
  return (
   <GoogleMap mapContainerStyle={mapContainerStyle || fullScreenStyle} center={currentPosition || { lat, lng }} zoom={16} options={{ fullscreenControl: false, mapTypeControl: false, streetViewControl: false }}>
    <MarkerF position={{ lat, lng }} />
    {currentPosition && <MarkerF position={currentPosition} icon={{ path: window.google.maps.SymbolPath.CIRCLE, scale: 8, fillColor: "blue", fillOpacity: 0.6, strokeWeight: 2, strokeColor: "white" }} />}
   </GoogleMap>
  );
 } else {
  return <></>;
 }
};

export default LocationMap;
