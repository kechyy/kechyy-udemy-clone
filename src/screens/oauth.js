import React, { useState, useEffect } from 'react';
import countriesList from './countries';

import NumericInput from '../comps/NumericInput';
import Cover from '../comps/cover';
import firebase from 'firebase';
import zuz from '../zuz/functions';

function AccountPage(props) {

 const [view, setView] = useState('numview');
 const [loading, setLoading] = useState(false);
 const [mod, setMod] = useState("sendcode");
 const [dialCode, setDialCode] = useState("+234");
 const [phone, setPhone] = useState(null);
 const [verificationCode, setVerificationCode] = useState(null);
 const [confirmationResult, setconfirmationResult] = useState(null);

 useEffect(() => {
   if(!window.recaptchaverifier) {
     window.recaptchaverifier = new firebase.auth.RecaptchaVerifier("__phonesigner__");
     window.recaptchaverifier.render().then(wid => {
       window.widgetID = wid
     })
   }
 })

 const signin = () => {
   console.log('phone', phone)
   if(!phone) {
     zuz.Toast.show({html: 'Enter your phone number', time: 5})
   }else {
     setLoading(true);
     zuz.Toast.dismissAll();
     var appVerifier = window.recaptchaverifier,
     phoneNumber = dialCode + phone;
     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
     .then(confirmation => {

         setLoading(false);
         setMod('verifycode');
         setVerificationCode(null);
         setconfirmationResult(confirmation);

     }).catch(err => {

       setLoading(false);
       console.log('err', err.code)
       switch(err.code) {
         case 'auth/invalid-phone-number':
         zuz.Toast.show({html: 'That number is not valid. Please provide a valid phone number...'});
         break;
         default:
           zuz.Toast.show({html: 'We are unable to process your request at this time!'})
       }

     });
   }
   
 }

 const verify = () => {
   if(verificationCode == null) {
     zuz.Toast.show({html: 'Enter verification code'})
   }else {
     setLoading(true);
     confirmationResult.confirm(verificationCode)
     .then(result => {
       setLoading(false);
        console.log('You are signed in...');
     }).catch(err => {
       console.log(err);
       setLoading(false);
       zuz.Toast.show({html: 'Invalid confirmation code...'})
     })
   }
 }

 const verifyCodeView = () => {

  return (
    <div className="oauth-view oauth-view-verify rel">

      { loading && <Cover /> }

      <h1 className="s30 otitle fontb">Verify Phone Number</h1>
      <h1 className="s18 oline fontn">Enter verification code sent to <span className="font">{dialCode + phone }</span></h1>

      <NumericInput
        placeholder="xxxxxx" 
        className="iput s24 fontb" 
        defaultValue={verifyCodeView}
        onChange={e => {setVerificationCode(e.target.value = "" ? null : e.target.value)}}
      />
      <button onClick={() => verify()} className="button s24 fontb cfff">Continue</button>
    </div>
  )

 }


 const sendCodeView = () => {
    return (
    <div className="oauth-view oauth-view-verify rel">

        { loading && <Cover /> }

      <h1 className="s30 otitle fontb">Sign in</h1>
      <h1 className="s18 oline fontn">Enter your phone and we will send you a one time verification code</h1>

      <select defaultValue={"+92"} className="iput s24 fontb">
        { countriesList.map((e,i) => {
          return (
          <option key={i} value={e.dialCode}>{e.name} ({e.dialCode})</option>
          )
        })}
      </select>
      <NumericInput defaultValue={phone} onChange={e => setPhone(e.target.value) } placeholder="0300 123 4567" className="iput s24 fontb" />

      <div className="__phonesigner__" id="__phonesigner__" />

      <button onClick={() => signin()} className="button s24 fontb cfff">Continue</button>
    </div>
  )
 }

 return (
  mod ==='sendcode' ? sendCodeView() : verifyCodeView()
 )

 
}

export default AccountPage
