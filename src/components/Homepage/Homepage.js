import React from 'react'
// import { FcSearch } from 'react-icons/fc'
import styles from './homepage.module.css'
// import { Autocomplete } from '@react-google-maps/api'
import Video from '../../assets/videos/video.mp4'



const Homepage = ( { setCoordinates }) => {

    // const [autocomplete, setAutocomplete] = useState(null);



    // const onLoad= (autoC)=> setAutocomplete(autoC);

    // const onPlaceChanged = ()=> {
    //     const lat= autocomplete.getPlace().geometry.location.lat();
    //     const lng= autocomplete.getPlace().geometry.location.lng();

    //     setCoordinates({lat, lng});
    // }




    return (

        <div className={styles['container']} >

            <div className={styles['homepage-container']}>

                <video 
                src={Video} 
                autoPlay
                loop
                muted
                type='video/mp4'
                 > </video>
                <div className={styles['homepage-overlay']}></div>
                <div className={styles['homepage-text']}>
                    <h1>
                        Kelo
                    </h1>

                    <div>

                    <h3> Get quick and easy access to places around you. </h3>
                    
                    <h3> Explore Hotels, Restaurants and Attractions Around You. </h3> 
                    </div>
                    {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={styles['search']}  >
                            <FcSearch />
                            <input type="text" 
                            placeholder= 'Search for an hotel'
                            />
                        </div>

                    </Autocomplete> */}

                    <div>
                        <div className={styles['homepage-explore']}>
                            <p> Explore Now</p>
                        </div>
                        

                    </div>
                    

                </div>
                

            </div>

           
        </div>
    )
}

export default Homepage
