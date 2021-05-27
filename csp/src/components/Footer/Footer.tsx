import React from 'react'
import styles from './Footer.module.css';
import twitter from "../../assets/svgs/twitter.svg";
import linkedin from "../../assets/svgs/linkedin.svg";
import instagram from "../../assets/svgs/instagram.svg";
import facebook from "../../assets/svgs/facebook.svg";
import location from "../../assets/svgs/location.svg";
import logo from "../../assets/svgs/logo.svg";
import mail from "../../assets/svgs/mail.svg";
import youtube from "../../assets/svgs/youtube.svg";
import phone from "../../assets/svgs/phone.svg";
import send from "../../assets/svgs/send.svg";

interface Props {

}

const Footer = (props: Props) => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.Line}></div>
            <img src={logo} alt="" />
            <div className={styles.Footer}>
                <div className={styles.Contact}>
                    <div className={styles.address}>
                        <img src={location} alt="" />
                        <span>Plot 15, Block J, Otunba Jobi Fele Way, Central Business District, Alausa, Ikeja.</span>
                    </div>
                    <div className={styles.mail}>
                        <img src={mail} alt="" />
                        <span>corporate@sidmach.com</span>
                    </div>
                    <div className={styles.phone}>
                        <img src={phone} alt="" />
                        <span>0908 719 7603, 0908 719 7604, 0908 734 9482</span>
                    </div>
                </div>
                <div className={styles.Products}>
                    <h2>Products & Services</h2>
                    <ul>
                        <li>Office 365</li>
                        <li>Exchange Online</li>
                        <li>Microsoft Teams</li>
                        <li>Skype for Business</li>
                        <li>Sharepoint Online</li>
                    </ul>
                </div>
                <div className={styles.Socials}>
                    <h2>Stay Connected</h2>
                    <div className={styles.icons}>
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={youtube} alt="" />
                    </div>

                    <h2>Stay Updated</h2>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button><img src={send} alt="" /></button>
                    </form>
                </div>
            </div>
            <footer>Powered By: Sidmach Technologies Nigeria Limited Copyright 2021 - Cloud Solution Provider</footer>
        </div>
    )
}

export default Footer
