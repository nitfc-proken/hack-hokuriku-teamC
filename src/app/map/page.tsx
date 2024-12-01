"use client";
import LocationMap from "@/components/map/map";

function MapPage() {
 return (
  <div>
   <LocationMap lat={35.681236} lng={139.767125} />
  </div>
 );
}

export default MapPage;
