'use client'

import { useRef, useEffect, useState } from 'react'
import loader from '../(utils)/googleMapsLoader'
// import { Wrapper, Status } from "@googlemaps/react-wrapper"

// const render = (status) => {
//   switch (status) {
//     case Status.LOADING:
//       return <div>cargando</div>;
//     case Status.FAILURE:
//       return <div>error carga maps</div>;
//     case Status.SUCCESS:
//       return <MyMapComponent />;
//   }
// }

// function MyMapComponent({center,zoom,}) {
//   const [map, setMap] = useState()
//   const ref = useRef()

//   useEffect(() => {
//     if (ref.current && !map) {
//       setMap(new window.google.maps.Map(ref.current, {}));
//     }
//   }, [ref, map]);

//   return <div ref={ref} id="map" className='w-full h-full' />;
// }

const stylesMap = [
  { elementType: "geometry", stylers: [{ color: "#0fa84e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1F1F1F" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#FFFFFF" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#FFFFFF" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#282828" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
]

function Map({ address }) {
  const [map, setMap] = useState()
  // const ref = useRef()

  useEffect(() => {
    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 11,
            styles: stylesMap
          };
          const newMap = new window.google.maps.Map(
            document.getElementById('map'),
            mapOptions
          );
          const marker = new window.google.maps.Marker({
            position: results[0].geometry.location,
            map: newMap,
          });
          setMap(newMap);
        }
      });
    });
  }, [address]);
  // useEffect(() => {
  //   if (ref.current && !map) {
  //     setMap(new window.google.maps.Map(ref.current, {}));
  //   }
  // }, [ref, map]);  

  return (
    <div id="map" className='h-full rounded-md'></div>
    // <Wrapper apiKey={"AIzaSyDrghSI61XzUZ_UM6ReF-N3iUmTZqGwe1M"} render={render} className='w-full h-full'>
    //   <div ref={ref} className='w-full h-full' />
    // </Wrapper>
  )
}

export default Map;
