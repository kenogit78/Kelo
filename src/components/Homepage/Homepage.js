import React from 'react'
import { FcSearch } from 'react-icons/fc'
import styles from './homepage.module.css'

const Homepage = () => {
    return (
        <div className={styles['container']} >

            <div className={styles['homepage-container']}>

                <div className={styles['homepage-text']}>
                    <h1>
                        Kelo
                    </h1>

                    <div>

                    <p> Search and secure your bookings. </p>
                    
                    <p> Get easier access to any place you want online. </p> 
                    </div>

                    <div className={styles['search']}>
                        <FcSearch />
                        <input type="text" 
                         placeholder= 'Search for an hotel'
                        />
                    </div>

                </div>

            </div>

           
        </div>
    )
}

export default Homepage
