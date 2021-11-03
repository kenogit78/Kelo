import React  from 'react'
import styles from './cards.module.css'
import { BsArrowRight } from 'react-icons/bs'; 
// import ReactPaginate from 'react-paginate';



const Cards = ({hotels, type, setType, rating, setRating}) => {



    const cardItems = () => {
        
        return(
        hotels?.map((hotel) => (
            hotel.name ? hotel.photo ? (
            <div className={styles['cards']}>
            <img src={hotel.photo.images.large.url } alt="" />

                <div className={styles['cards-text']}>
                    
                    <h3> {hotel.name} </h3>
                    <p><span> Price </span> : {hotel?.price ? hotel.price : 'Unavailable'}</p>
                    <p><span> Ranking </span> : {hotel?.ranking ? hotel.ranking : 'Unavailable' }</p>
                    {/* <p><span> Address </span> : {hotel?.address ? hotel.address : 'Unavailable' }</p> */}
                </div>

            </div>
            ): null : null
        )
    )
    )
    }

    return (

        <div className={styles['cards-container']}>

            <div className={styles['cards-header']} >
               <h1> <span>{type} </span> around you </h1>

                <div className={styles['select']}>
                    <label htmlFor="">Explore <BsArrowRight /> </label>
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
            </div>
           

            <div className={styles['cards-content']}>
            {
                cardItems()
        }
        </div>

      </div>
    )
}

export default Cards
