import React from 'react'
import Product from './Product/Product'
import cyber from '../../assets/svgs/cyber.svg'
import cloud from '../../assets/svgs/cloud.svg'
import microsoft365 from '../../assets/svgs/microsoft365.svg'
import analytics from '../../assets/svgs/analytics.svg';

import styles from './Products.module.css';

interface Props {

}

const Products = (props: Props) => {
    return (
        <div className={styles.Wrapper}>
            <h2 className={styles.header}>Products Category</h2>
            <div className={styles.Products}>

                <Product hover={false} image={microsoft365} rating={2} title="Business Productivity" />
                <Product hover={false} image={cloud} rating={4} title="Cloud Solutions" />
                <Product hover={false} image={cyber} rating={5} title="Cyber Security" />
                <Product hover={false} image={analytics} rating={5} title='Data Analytics' />
            </div>
            <button className={styles.More}>Show More ah</button>
        </div>
    )
}

export default Products
