import { memo } from "react";
import BornIcon from '../../assets/images/born.png';
import BagIcon from '../../assets/images/bag.png';
import BellIcon from '../../assets/images/bell.png';
import AvatarIcon from '../../assets/images/avatar-user.png';
import LogoMissoma from '../../assets/images/logo-missoma.png';

import Button from '../../atoms/Button';
import Navigator from './Navigation'

import styles from './styles.module.scss';

const Header = ({pages, setPages, activePage}) => {
    return (
        <div className={styles.main}>
            <div>
                <div>
                    <img src={BornIcon}/>
                    <span>Retailers</span>
                </div>
                <div>
                    {activePage.title === "Story" && <img src={BellIcon}/>}
                    <img src={BagIcon}/>
                    <img src={AvatarIcon}/>
                </div>
            </div>

            <div>
                <div>
                    <div>Profile completion</div>
                    <div>
                        <div></div>
                        <span>50%</span>
                    </div>
                </div>
                <div>
                    <img src={LogoMissoma}/>
                    <h2>Missoma</h2>
                </div>
                <div>
                    {activePage.title === "Story" ?
                    <Button 
                        style={{
                            background: "#333333",
                            color: "#ffffff",
                            padding: "8px 40px"
                        }}
                    >
                        Share profile
                    </Button> : 
                    <Button 
                    style={{
                        background: "#333333",
                        color: "#ffffff",
                        padding: "8px 40px"
                    }}
                >
                    + Add products
                </Button>}
                </div>
            </div>

            <Navigator pages={pages} setPages={setPages}/>
        </div>
    )
}

export default memo(Header);