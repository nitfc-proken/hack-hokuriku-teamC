"use client";
import { LocationMap, LatLng } from "@/components/map/map";

function MapPage() {
 const positionList: LatLng[] = [
  // 金沢駅
  { lat: 36.578081827075, lng: 136.6478205667 },
  // 兼六園
  { lat: 36.561325, lng: 136.656205 },
  // 21世紀美術館
  { lat: 36.561204, lng: 136.656763 },
 ];
 return (
  <div>
   <LocationMap positionList={positionList} centerPosition={positionList[0]} />
  </div>
 );
}

export default MapPage;
