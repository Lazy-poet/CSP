import React, { useState, ChangeEvent } from 'react';
// import { RiDeleteBin6Line } from 'react-icons/ri';
import { ImCancelCircle } from 'react-icons/im';
import ProductPageBg from '../../assets/svgs/ProductPageBg.svg';
import microsoft365 from '../../assets/svgs/microsoft365.svg';
// import share from '../../assets/svgs/share.svg';
// import likeButton from '../../assets/svgs/likeButton.svg';
import { InputGroup, Button, FormControl } from "react-bootstrap"
import styles from "./Cart.module.css"
interface Props {

}

const Cart = (props: Props) => {

    const [counter, setCounter] = useState('10');
    // const [value, setValue] = useState("")


    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCounter(e.target.value)
    }
    const increment = () => {
        setCounter((+counter + 1).toString())
    }
    const decrement = () => {
        if (+counter > 0) setCounter((+counter - 1).toString())
    }
    return (
        <div className={styles.Cart}>
            <div className={styles.Img}>
                <img src={ProductPageBg} alt="" />
            </div>
            <div className={styles.CartWrapper}>
                <h1>Cart (1 Item)</h1>
                <div className={styles.Labels}>
                    <h2>ITEM</h2>
                    <h2>QTY</h2>
                    <h2>UNIT PRICE</h2>
                    <h2>SUB TOTAL</h2>
                </div>
                <div className={styles.Product}>
                    {/* <span><RiDeleteBin6Line /></span> */}
                    <span><ImCancelCircle /></span>
                    <img src={microsoft365} alt="" />
                    <div className={styles.qty}>
                        <InputGroup className={styles.input}>
                            <InputGroup.Prepend>
                                <Button variant="outline-danger" disabled={counter === '0'} onClick={decrement}>-</Button>
                            </InputGroup.Prepend>
                            <FormControl aria-describedby="basic-addon1" value={counter} onChange={changeHandler} />
                            <InputGroup.Append>
                                <Button variant="outline-success" onClick={increment}>+</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <p>N185.00</p>
                    <p>N185.00</p>
                </div>
                <div className={styles.Product}>
                    {/* <span><RiDeleteBin6Line /></span> */}
                    <span><ImCancelCircle /></span>
                    <img src={microsoft365} alt="" />
                    <div className={styles.qty}>
                        <InputGroup className={styles.input}>
                            <InputGroup.Prepend>
                                <Button variant="outline-danger" disabled={counter === '0'} onClick={decrement}>-</Button>
                            </InputGroup.Prepend>
                            <FormControl aria-describedby="basic-addon1" value={counter} onChange={changeHandler} />
                            <InputGroup.Append>
                                <Button variant="outline-success" onClick={increment}>+</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <p>N185.00</p>
                    <p>N185.00</p>
                </div>
                <div className={styles.Product}>
                    {/* <span><RiDeleteBin6Line /></span> */}
                    <span><ImCancelCircle /></span>
                    <img src={microsoft365} alt="" />
                    <div className={styles.qty}>
                        <InputGroup className={styles.input}>
                            <InputGroup.Prepend>
                                <Button variant="outline-danger" disabled={counter === '0'} onClick={decrement}>-</Button>
                            </InputGroup.Prepend>
                            <FormControl aria-describedby="basic-addon1" value={counter} onChange={changeHandler} />
                            <InputGroup.Append>
                                <Button variant="outline-success" onClick={increment}>+</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <p>N185.00</p>
                    <p>N185.00</p>
                </div>

                <div className={styles.Line} />
                <div className={styles.Total}>
                    <p>TOTAL:<span>N185.00</span></p>
                </div>
                <div className={styles.buttons}>
                    <button>Continue shopping</button>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
