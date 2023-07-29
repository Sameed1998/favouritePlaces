import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../util/database";

export default function AllPlaces({route}) {
  const [loadedPlace,setLoadedPlace]=useState([])
  const isFocused =useIsFocused();
  useEffect(()=>{
    async function loadPlaces(){
    const places = await fetchPlaces()
    setLoadedPlace(places);
    }
if(isFocused){
  loadPlaces();
// setLoadedPlace(curPlaces=>[...curPlaces,route.params.place]);
}
  },[isFocused])
  return <PlacesList places={loadedPlace}/>;
}
