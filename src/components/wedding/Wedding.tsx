import banner from '../../images/banner.png';
import thirdpower from '../../images/thirdpower.png';

import styles from './Wedding.module.css';
export default function Wedding() {
  return (
    <div className={styles.container}>
      <div className={styles.announcement}>
        <p
          className={styles.text}
          style={{
            marginRight: '20%',
          }}
        >
          Sara &
        </p>
        <p
          className={styles.text}
          style={{
            marginLeft: '20%',
          }}
        >
          Manu
        </p>
        <p
          className={styles.text}
          style={{
            marginRight: '20%',
          }}
        >
          Are
        </p>
        <p
          className={styles.text}
          style={{
            marginLeft: '20%',
          }}
        >
          Getting
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginRight: '10%',
          }}
        >
          <p className={styles.text}>Married</p>
          <img
            style={{
              width: '3vw',
              height: '3vw',
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
