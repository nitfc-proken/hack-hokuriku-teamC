import { Libraries } from "@googlemaps/js-api-loader";
import { GoogleMap, MarkerF, useJsApiLoader, Polyline } from "@react-google-maps/api";
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

// 現在地を取得するカスタムフック
function UseCurrentPosition() {
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
     console.error("位置情報の取得に失敗しました:", error.message || error);
    }
   );

   return () => {
    navigator.geolocation.clearWatch(watchId);
   };
  }
 }, []);

 return currentPosition;
}

// 2地点間の距離を計算する関数
const calculateDistance = (point1: LatLng, point2: LatLng): number => {
 const R = 6371e3; // 地球の半径 (メートル)
 const φ1 = (point1.lat * Math.PI) / 180; // 緯度をラジアンに変換
 const φ2 = (point2.lat * Math.PI) / 180; // 緯度をラジアンに変換
 const Δφ = ((point2.lat - point1.lat) * Math.PI) / 180; // 緯度の差
 const Δλ = ((point2.lng - point1.lng) * Math.PI) / 180; // 経度の差

 const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
 const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

 return R * c; // 距離 (メートル)
};

const LocationMap = ({ positionList, centerPosition, mapContainerStyle }: Props) => {
 const [libraries] = useState<Libraries>(["geometry", "drawing"]);
 const { isLoaded } = useJsApiLoader({
  id: "google-map-script",
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || "",
  libraries,
 });

 const currentPosition = UseCurrentPosition();
 const kanazawaStation: LatLng = { lat: 36.578081827075, lng: 136.6478205667 };
 const fullScreenStyle: CSSProperties = {
  height: "100vh",
  width: "100vw",
 };
 const center = centerPosition || currentPosition || kanazawaStation;

 // 現在の位置とマーカー位置を結ぶpolylinePositionsを作成
 if (!currentPosition) {
  return <></>;
 }
 const polylinePositions = positionList;

 // 各線分の距離を表示するためのマーカーを追加
 const distanceMarkers = polylinePositions.map((_, index) => {
  const midPoint: LatLng = {
   lat: (polylinePositions[index].lat + currentPosition.lat) / 2,
   lng: (polylinePositions[index].lng + currentPosition.lng) / 2,
  };
  const distance = calculateDistance(polylinePositions[index], currentPosition);
  return (
   <MarkerF
    key={`distance-${index}`}
    position={midPoint}
    icon={{ path: "M0,-5 L-5,5 L5,5 Z", scale: 1, strokeColor: "transparent", strokeWeight: 0, fillColor: "transparent", fillOpacity: 0 }}
    label={{
     text: `${(distance / 1000).toFixed(2)} km`,
     color: "black",
     fontSize: "16px",
     fontWeight: "bold",
    }}
   />
  );
  return null; // 最後の点にはマーカーを表示しない
 });

 if (isLoaded) {
  return (
   <GoogleMap mapContainerStyle={mapContainerStyle || fullScreenStyle} center={center} zoom={16} options={{ fullscreenControl: false, mapTypeControl: false, zoomControl: false, streetViewControl: false }}>
    {currentPosition && <MarkerF position={currentPosition} icon={{ path: window.google.maps.SymbolPath.CIRCLE, scale: 8, fillColor: "blue", fillOpacity: 0.6, strokeWeight: 2, strokeColor: "white" }} />}
    {positionList.map((latLng, index) => (
     <MarkerF key={index} position={latLng} />
    ))}

    {currentPosition && positionList.length > 0 && positionList.map((latLng, index) => <Polyline key={index} path={[currentPosition, latLng]} options={{ strokeColor: "red", strokeOpacity: 1, strokeWeight: 3 }} />)}
    {/* 距離を表示 */}
    {distanceMarkers}
   </GoogleMap>
  );
 } else {
  return <></>;
 }
};

export { LocationMap, UseCurrentPosition };
export type { LatLng };
