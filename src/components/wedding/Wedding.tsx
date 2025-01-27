import banner from '../../images/banner.png';
import thirdpower from '../../images/thirdpower.png';

import styles from './Wedding.module.css';
export default function Wedding() {
  return (
    <div className={styles.container}>
      <div className={styles.announcement}>
        <p className={styles.text}>Sara &</p>
        <p className={styles.text}>Manu</p>
        <p className={styles.text}>Are</p>
        <p className={styles.text}>Getting</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <p className={styles.text}>Married</p>
          <img
            style={{
              width: '3vh',
              height: '3vh',
            }}
            src={thirdpower}
          />
        </div>
      </div>
      <div className={styles.dataAndPhoto}>
        <img src={banner} />
      </div>
    </div>
  );
}
