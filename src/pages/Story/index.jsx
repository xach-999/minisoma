import styles from './styles.module.scss';

import BannerImg from '../../assets/images/banner.png';
import Button from '../../atoms/Button';

import BookIcon from '../../assets/images/Book.png';
import DocumentIcon from '../../assets/images/Document.png';
import UploadIcon from '../../assets/images/Upload.png';
import YourColections from './components/YourColections';
import SocialLinks from './components/SocialLinks';
import Footer from '../../components/Footer';

const Story = () => {
    return (
        <div className={styles.main}>
            <div className={styles.information_part}>
                <div className={styles.header_part}>
                    <div>
                        <span>Founded in</span>
                        <span>2011</span>
                    </div>
                    <div>
                        <span>Origin</span>
                        <span>Greece</span>
                    </div>
                    <div>
                        <span>Currencies</span>
                        <span>USD, GBP</span>
                    </div>
                </div>

                <div className={styles.img_part}>
                    <div>
                        <Button
                            style={{
                                margin: "16px",
                                outline: "none",
                                border: "none",
                                color: "#333333"
                            }}
                        >
                            Edit banner
                        </Button>
                    </div>
                </div>

                <div className={styles.lookBook_part}>
                    <div>
                        <div>
                            <img src={BookIcon} />
                            <div>
                                <span>Lookbook</span>
                                <span>SS 23</span>
                            </div>
                        </div>
                        <div>
                            <img src={DocumentIcon} />
                            <div>
                                <span>Linesheet</span>
                                <span>SS 23</span>
                            </div>
                        </div>
                        <div>
                            <img src={UploadIcon}/>
                        </div>
                    </div>
                </div>


                <div className={styles.text_part}>
                    <p>
                        Since 2013, Emporio Sirenuse has distilled the values and verve of inimitable Amalfi Coast hotel Le Sirenuse into a small, carefully curated collection of beachwear, resortwear, design and lifestyle items.
                    </p>
                </div>
            </div>
            <YourColections />
            <SocialLinks />
        </div>
    )
}

export default Story;