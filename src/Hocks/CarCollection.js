import axios from "axios";
import { useEffect, useState } from "react";

const useCarCollection=()=>{
	const [carCollection,setCarCollection]=useState([]);
useEffect(()=>{
	(async()=>{
   const {data}=await axios.get('https://nameless-spire-11955.herokuapp.com/inventory')
	   setCarCollection(data.data)
   
	})()
},[]);
  return [carCollection];
}
export default useCarCollection;