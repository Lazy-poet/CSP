import React from 'react';
import rating from '../../../assets/svgs/star.svg';
import share from '../../../assets/svgs/share.svg';
import likeButton from '../../../assets/svgs/likeButton.svg';
import styles from "./Product.module.css"


interface Props {
    image: string;
    rating: number;
    title: string;
    price?: string | undefined;
    hover: Boolean;
}

const Product = (props: Props) => {
    let ratings = [];
    for (let i = 0; i < props.rating; i++) {
        ratings.push(rating)
    }
    return (
        <div className={styles.Product}>
            <div className={styles.imgWrapper}>
                <img src={props.image} alt="" />
                {props.hover ? <div className={styles.Overlay}>
                    <p>Best for businesses that need Office apps across devices plus professional email, cloud file storage, and online meetings</p>
                    <button>Add to Cart</button>
                    <div>
                        <div><img src={share} alt="" /><span>Share</span></div>
                        <div><img src={likeButton} alt="" /><span>Like</span></div>
                    </div>
                </div> : null}
            </div>
            <div className={styles.Ratings}>
                {ratings.map((rating, idx) => {
                    return <img key={idx} src={rating} alt="" />
                })}
            </div>
            <span>{props.title}</span>
            {props.price ? <p className={styles.Price}>{props.price}</p> : null}
        </div>
    )
}



export default Product
