import React from 'react';
import styles from './HCardPreview.module.scss';


const HCardPreview = (props) => {
    return (
      <div className={styles.container}>
        <div className={styles['name-content']}>
          <div className={`${styles['name']} fn`}>{props.fullName}</div>
          <div className={styles.image}>
            <div className={styles.placeholder} style={{backgroundImage: `url(${props.imageUrl})`}}/>
          </div>
        </div>
  
        <div className={styles['details-container']}>
          <div className={styles.row}>
            <div className={styles.context}>
              <div className={styles.label}>EMAIL</div>
              <div className={`${styles['text']} email`}>{props.email}</div>
            </div>
          </div>
  
          <div className={styles.row}>
            <div className={styles.context}>
              <div className={styles.label}>PHONE</div>
              <div className={`${styles['text']} tel`}>{props.phoneNumber}</div>
            </div>
          </div>
  
          <div className="address">
            <div className={styles.row}>
              <div className={styles.context}>
                <div className={styles.label}>ADDRESS</div>
                <div className={`${styles['text']} street-address`}>{props.streetAddress}</div>
              </div>
            </div>
  
            <div className={styles.row}>
              <div className={styles.context}>
                <div className={styles.label}></div>
                <div className={styles.text}>
                  {props.suburb && <span className="locality">{props.suburb}</span>}
                  {(props.suburb && props.state && <span>,&nbsp;</span>)}
                  {props.state && <span className="region">{props.state}</span>}
                </div>
              </div>
            </div>
  
  
            <div className={styles.row}>
              <div className={styles.context}>
                <div className={styles.label}>POSTCODE</div>
                <div className={`${styles['text']} postal-code`}>{props.postcode}</div>
              </div>
  
              <div className={styles.context}>
                <div className={styles.label}>COUNTRY</div>
                <div className={`${styles['text']} country-name`}>{props.country}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HCardPreview;