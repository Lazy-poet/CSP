import React from 'react';
import Product from '../Products/Product/Product'
import ProductPageBg from '../../assets/svgs/ProductPageBg.svg';
import cyber from '../../assets/svgs/cyber.svg'
import cloud from '../../assets/svgs/cloud.svg'
import microsoft365 from '../../assets/svgs/microsoft365.svg'
import analytics from '../../assets/svgs/analytics.svg';
import styles from './ProductPage.module.css'

interface Props {
    
}

const ProductPage = (props: Props) => {
    return (
        <div className={styles.ProductPage}>
            <div className={styles.Img}>
                <img src={ProductPageBg} alt=""/>
            </div>
            <div className={styles.ProductsWrapper}>
                <h1>Email & Collaboration</h1>
               <div className={styles.Products}>
                    <Product image={microsoft365} hover={true} title="OneDrive for Business (Plan 1)" price="N184.00" rating={5}  />
                    <Product image={cloud} hover={true} title="Microsoft 365 Business Standard Total" price="N184.00" rating={5}  />
                    <Product image={microsoft365} hover={true} title=" Office 365 EI" price="N184.00" rating={5}  />
                    <Product image={cyber} hover={true} title="Microsoft Teams Free" price="N184.00" rating={5}  />
                    <Product image={analytics} hover={true} title="Data Analytics" price="N184.00" rating={5}  />
               </div>
               <button>Show More</button>
            </div>
        </div>
    )
}

export default ProductPage
