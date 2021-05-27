import React from 'react'
import styles from './ProductDetails.module.css';
import ProductPageBg from '../../../assets/svgs/ProductPageBg.svg';
import microsoft365 from '../../../assets/svgs/microsoft365.svg';
import { FormControl, Button, InputGroup } from "react-bootstrap";
import twitter from "../../../assets/svgs/twitter.svg";
import linkedin from "../../../assets/svgs/linkedin.svg";
import instagram from "../../../assets/svgs/instagram.svg";
import facebook from "../../../assets/svgs/facebook.svg";

interface Props {

}

const ProductDetails = (props: Props) => {
    return (
        <div className={styles.ProductDetails}>
            <div className={styles.Img}>
                <img src={ProductPageBg} alt="" />
            </div>

            <div className={styles.ProductDetailsWrapper}>
                <img src={microsoft365} alt="" />
                <div>
                    <h1>OneDrive for Business (Plan 1)</h1>
                    <span>N184.00</span>
                        <InputGroup className={styles.input}>
                            <InputGroup.Prepend>
                                <Button disabled variant="outline-danger">-</Button>
                            </InputGroup.Prepend>
                            <FormControl aria-describedby="basic-addon1" />
                            <InputGroup.Append>
                                <Button variant="outline-primary">+</Button>
                            </InputGroup.Append>
                        </InputGroup>

                    <div>
                        <h3>Description</h3>
                        <p>Convenient online companions to Microsoft Word, Excel, PowerPoint, and OneNote to do light editing of documents directly from your Web browser with OneDrive for Business.</p>
                        <button>Add to Cart</button>
                    </div>
                    <h4>Share</h4>
                    <div className={styles.socials}>
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
