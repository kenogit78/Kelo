import React from 'react'
import styles from './map.module.css'
import GoogleMapReact from 'google-map-react';
// import usePlacesAutocomplete, {
//     getGeocode,
//     getLatLng,
//   } from "use-places-autocomplete";


const Map = ({hotels, coordinates, setCoordinates, setBounds, type, setType, rating, setRating}) => {


    const mapContainerStyle = {
        width: "100vw",
        height: "100vh"
    }

    return (
        <div className={styles['map-container']}>

            <div className={styles['list']}>
                    <h2>Explore new places</h2>
                <div>
                    
                <select 
                    name="" 
                    id=""
                    value={type}
                    onChange={(e)=> setType(e.target.value)}
                    >
                        <option value="hotels">Hotels</option>
                        <option value="restaurants">Restaurants</option>
                        <option value="attractions">Attractions</option>
                </select>
              
                <select 
                    name="" 
                    id=""
                    value={rating}
                    onChange={(e)=> setRating(e.target.value)}
                    >
                        <option value={0}> All</option>
                        <option value={3}> Abover 3.0</option>
                        <option value={4}>Above 4.0</option>
                        
                </select>
                </div>

                <div className={styles['map-cards-container']}>
            {
                hotels?.map((hotel) => (
                    hotel.name ? hotel.photo ? (
                    <div className={styles['cards']}>
                    <img src={hotel.photo.images.large.url } alt="" />
                    <h3> {hotel.name} </h3>
                    <p>{hotel.rating}</p>
                    <p>{hotel.price}</p>
                    </div>
                    ): null : null
                )
            )
        }
        </div>
                
            </div>

            <div className={styles['map']}>
            <GoogleMapReact
                mapContainerStyle={mapContainerStyle}
                bootstrapURLKeys={{ key: 'AIzaSyDafcVI2vrVjd2odX_oMTjyOtPoUP0Ejxw' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={8}
                // eslint-disable-next-line no-sequences
                // margin={50, 50, 50, 50}
                option={''}
                onChange={(e)=>{
                    // console.log(e)
                    setCoordinates({  lat: e.center.lat, lng: e.center.lng})
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }
                }
                onChildClick={''}
                >
                {/* <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                /> */}
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Map
