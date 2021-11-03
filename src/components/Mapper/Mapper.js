import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Mapper = () => {

    const containerStyle = {
        width: "100vw",
        height: "100vh"
    }

    const center = {
        lat: -3.745,
        lng: -38.523
      };


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDafcVI2vrVjd2odX_oMTjyOtPoUP0Ejxw"
      })

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                // onLoad={onLoad}
                // onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
      </GoogleMap>
        </div>
    ): <></>
}

export default Mapper
