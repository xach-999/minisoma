import { memo } from "react";
import styles from "./styles.module.scss";

const Navigation = ({ pages, setPages }) => {

  return (
    <div className={styles.main}>
      <div>
        {pages.map((page) =>
          <span
            key={page.id}
            className={`${page.active && styles.active}`}
            onClick={() => setPages(pages.map(item => ({ ...item, active: item.id === page.id ? true : false })))}
          >
            {page.title}
          </span>)}
      </div>
    </div>
  );
};

export default memo(Navigation);