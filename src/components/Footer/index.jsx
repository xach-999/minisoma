import { memo } from "react";

import FacebookIcon from '../../assets/images/facebook.png';
import InstagramIcon from '../../assets/images/instagram.png';
import TwitterIcon from '../../assets/images/twitter.png';
import BornFooter from '../../assets/images/born-footer.png';

import styles from './styles.module.scss';

const Footer = () => {
    return (
        <div className={styles.main}>
            <div>
                <span>Contact Support</span>
                <span>Terms & Conditions</span>
                <span>Privacy policy</span>
            </div>
            <div>
                <img src={BornFooter}/>
            </div>
            <div>
                <img src={FacebookIcon}/>
                <img src={InstagramIcon}/>
                <img src={TwitterIcon}/>
            </div>
        </div>
    )
}

export default memo(Footer);