/* eslint-disable */
import styles from './App.module.scss';
import React, { useState } from "react";
import HCardForm from './components/HCard/HCardForm';
import HCardPreview from './components/HCard/HCardPreview';

const App = () => {

  // This helper function sets user entered values set to the setData function
  const setValues = (setData) => (e) => setData(e.target.value);

  // This helper function concats the entered given name and surname with a delimiter 
  const joinNames = (names, delim = ' ') => names.filter(name => name.length > 0).join(delim);


  const [givenName, setGivenName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [houseName, setHouseName] = useState('');
  const [street, setStreet] = useState('');
  const [suburb, setSuburb] = useState('');
  const [countryState, setCountryState] = useState('');
  const [postcode, setPostcode] = useState('')
  const [country, setCountry] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const fullName = joinNames([givenName, surname]);
  const streetAddress = joinNames([houseName, street]);

  const handleImageUpload = (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0]
    const imageUrl = imageFile ? URL.createObjectURL(imageFile) : '';
    setAvatarUrl(imageUrl);
  }

  return (
    <div className="App">
        <div className={styles['container-panel']}>
    <div className={styles.form}>
      <div className={styles['form-container']}>
          <h1 className= {styles.heading}>hCard Builder</h1>     
        <HCardForm
          givenName={givenName}
          onGivenNameChange={setValues(setGivenName)}
          surname={surname}
          onSurnameChange={setValues(setSurname)}
          email={email}
          onEmailChange={setValues(setEmail)}
          phoneNumber={phoneNumber}
          onPhoneNumberChange={setValues(setPhoneNumber)}
          houseName={houseName}
          onHouseNameChange={setValues(setHouseName)}
          street={street}
          onStreetChange={setValues(setStreet)}
          suburb={suburb}
          onSuburbChange={setValues(setSuburb)}
          countryState={countryState}
          onStateChange={setValues(setCountryState)}
          postcode={postcode}
          onPostcodeChange={setValues(setPostcode)}
          country={country}
          onCountryChange={setValues(setCountry)}
          handleFileUpload = {handleImageUpload}    
            />
      </div>
    </div>
    <div className={styles['preview-panel']}>
      <div className={styles.preview}>
        <h2 className={styles.title}>HCARD PREVIEW</h2>
            <HCardPreview
             fullName={fullName}
             email={email}
             phoneNumber={phoneNumber}
             streetAddress={streetAddress}
             suburb={suburb}
             state={countryState}
             postcode={postcode}
             country={country}
             imageUrl={avatarUrl}/>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
