"use client";
import LocationMap from "@/components/map/map";

function MapPage() {
 return (
  <div>
   <h1>Map</h1>
   <LocationMap lat={35.681236} lng={139.767125} />
  </div>
 );
}

export default MapPage;
