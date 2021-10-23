import React from 'react'
import styles from './cards.module.css'

const Cards = ({hotels}) => {




    return (

        
        <div className={styles['cards-container']}>
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
    )
}

export default Cards
