import { Libraries } from "@googlemaps/js-api-loader";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { CSSProperties, useState } from "react";

interface Props {
 lat: number;
 lng: number;
 mapContainerStyle?: CSSProperties;
}

const LocationMap = ({ lat, lng, mapContainerStyle }: Props) => {
 const [libraries] = useState<Libraries>(["geometry", "drawing"]); // 必要なライブラリーを指定します。
 const { isLoaded } = useJsApiLoader({
  id: "google-map-script",
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || "", // .envからAPIキーを読み込みます
  libraries,
 });
 if (isLoaded) {
  return (
   <GoogleMap mapContainerStyle={mapContainerStyle || { height: "450px", width: "100%" }} center={{ lat, lng }} zoom={16}>
    <MarkerF position={{ lat, lng }} />
   </GoogleMap>
  );
 } else {
  return <></>;
 }
};

export default LocationMap;
