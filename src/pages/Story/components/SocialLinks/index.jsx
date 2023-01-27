import { memo } from "react";

import styles from './styles.module.scss';

const SocialLinks = () => {
    return (
        <div className={styles.main}>
            <h2>Social Links</h2>
            <div>
                {[...new Array(12)].map(a => <div></div>)}
            </div>
        </div>
    )
}

export default memo(SocialLinks);