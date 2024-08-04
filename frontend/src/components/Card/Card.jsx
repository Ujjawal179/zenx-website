import React from 'react'
import { Rating , Typography } from '@mui/material';
import styles from './Card.module.css';
import { IoMdChatbubbles, IoMdCall  } from "react-icons/io";

function Card({img, name, rating, description}) {
    return ( 
        <>
        <div className={styles.card}>
            <img className ={styles.cardimage} src={img} alt={name} />
            <div className={styles.cardinfo}>
                <div className='d-flex '>
                    <h3>{name}&nbsp;&nbsp;
                    <IoMdCall/>&nbsp;      {/* make this clickable */}
                    <IoMdChatbubbles/></h3>     {/* make this clickable */}
                </div>
                <Typography component="legend">Rating</Typography>
                <Rating
                name="simple-controlled"
                value={rating}
                readOnly 
                />
                <p  >{description.length > 100 ? `${description.substring(0, 150)}...` : description}</p>
                
            </div>
        </div>
        </>
     );
}

export default Card;