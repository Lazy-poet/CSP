import React from 'react';
// import Carousel from 'react-material-ui-carousel';
import { CarouselLayout1, CarouselLayout2 } from '../../utils/carousel';
// import { Carousel } from 'react-bootstrap';
import Product from '../Products/Product/Product';
import cyber from '../../assets/svgs/cyber.svg'
import cloud from '../../assets/svgs/cloud.svg'
import microsoft365 from '../../assets/svgs/microsoft365.svg'
import analytics from '../../assets/svgs/analytics.svg';
// import heroSlider1 from '../../assets/svgs/heroSlider1.svg';
import styles from './HomePage.module.css';


const HomePage = (props: unknown) => {
    return (
        <div className={styles.HomePage}>
            <div className={styles.Carousel1}>
                <CarouselLayout1 />
            </div>
            <div className={styles.Modal}>
                <h1>Access to hundreds of smart cloud solutions</h1>
                <span>Welcome to Sidmach Cloud Hub</span>
                <button>Buy Now</button>
            </div>
            <div className={styles.Wrapper}>
                <h2 className={styles.header}>Products Category</h2>
                <div className={styles.Products}>

                    <Product hover={false} image={microsoft365} rating={5} title="Business Productivity" />
                    <Product hover={false} image={cloud} rating={4} title="Cloud Solutions" />
                    <Product hover={false} image={cyber} rating={5} title="Cyber Security" />
                    <Product hover={false} image={analytics} rating={5} title='Data Analytics' />
                </div>
                <button className={styles.More}>Show More</button>
            </div>
            <section className={styles.Carousel2Section}>
                <article>
                    <h1>Why Choose Us</h1>
                    <button>Explore More</button>
                </article>
                <div className={styles.Carousel2}>
                    <CarouselLayout2 />
                </div>
            </section>
        </div>


    )
}

export default HomePage
