/* eslint-disable */
import React, { useRef } from 'react';
import styles from "./HCardForm.module.scss";
import FormInput from '../Layout/FormInput';
import Button from '../UI/Button';


const HCardForm = (props) => {

  const uploadAvatarRef = useRef(null);
  

// This function triggers an input element which is hidden using a button
    const handleClick = (e) => {
        e.preventDefault();
        uploadAvatarRef.current?.click();
    }
    
    return (
        <form className={styles.form}>
        <fieldset className={styles['field-container']}>
          <legend className={styles.details}>PERSONAL DETAILS</legend>
          <div className={styles['form-input-group']}>
            <FormInput type="text" label="GIVEN NAME" value={props.givenName}  id='givenName' onChange={props.onGivenNameChange}/>
            <FormInput type="text" label="SURNAME" value={props.surname} id='surname' onChange={props.onSurnameChange}/>
            <FormInput type="email" label="EMAIL" value={props.email} id='email' onChange={props.onEmailChange}/>
            <FormInput type="tel"  label="PHONE" value={props.phoneNumber} id='phone' onChange={props.onPhoneNumberChange}/>
          </div>
        </fieldset>
  
        <fieldset className={styles['field-container']}>
          <legend className={styles.details}>ADDRESS</legend>
          <div className={styles['form-input-group']}>
            <FormInput type="text" label="HOUSE NAME OR #" value={props.houseName} id='houseNameOrNumber' onChange={props.onHouseNameChange}/>
            <FormInput type="text" label="STREET" value={props.street} id='street' onChange={props.onStreetChange}/>
            <FormInput type="text" label="SUBURB" value={props.suburb} id='suburb' onChange={props.onSuburbChange}/>
            <FormInput type="text" label="STATE" value={props.countryState} id='state' onChange={props.onStateChange}/>
            <FormInput type="text" label="POSTCODE" value={props.postcode} id='postcode' onChange={props.onPostcodeChange}/>
            <FormInput type="text" label="COUNTRY" value={props.country} id='country' onChange={props.onCountryChange}/>
          </div>
        </fieldset>
  
        <fieldset className={styles['field-container']}>
          <div className={styles['form-input-group']}>
            <Button color='gray' onClick={handleClick}>Upload Avatar</Button>
            <input    type="file"
                      accept="image/jpeg,, image/bmp, image/gif,image/png"
                      style={{ display: 'none' }}
                      onChange={props.handleFileUpload}
                      ref = {uploadAvatarRef}
            />
            <Button color='blue'>Create hCard</Button>
          </div>
        </fieldset>
      </form>
   
    )
}

export default HCardForm;