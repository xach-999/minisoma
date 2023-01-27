import { memo } from "react"
import Button from "../../../../atoms/Button";

import styles from './styles.module.scss';

import Rectangle1 from '../../../../assets/images/Rectangle1.png';
import Rectangle2 from '../../../../assets/images/Rectangle2.png';
import Rectangle3 from '../../../../assets/images/Rectangle3.png';
import Rectangle4 from '../../../../assets/images/Rectangle4.png';
import RightIcon from '../../../../assets/images/right-icon.png';

const YourColections = () => {
    return (
        <div className={styles.main}>
            <div className={styles.header_part}>
                <div></div>
                <div>
                    <span>Your Colections</span>
                </div>
                <div>
                    <Button style={{
                        border: "1px solid #333333",
                        "font-size": "14px",
                        "line-height": "24px",
                        "letter-spacing": "0.06em"
                    }}>
                        Create Collection
                    </Button>
                </div>
            </div>

            <div className={styles.slider_part}>
                <div>
                    <div>
                        <div>
                            <img src={Rectangle1}/>
                            <img src={Rectangle2}/>
                            <img src={Rectangle3}/>
                            <img src={Rectangle4}/>
                        </div>
                        <span>SS23</span>
                    </div>
                </div>
            </div>
            <div className={styles.view_more_part}>
                <span>
                    View all collections <img src={RightIcon}/>
                </span>
            </div>
        </div>
    )
}

export default memo(YourColections);