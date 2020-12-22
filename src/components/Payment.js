import React from 'react'
import {usePaystackPayment} from 'react-paystack'
import axios from 'axios'


const config = {
    reference: (new Date()).getTime(),
    email: "fintech.request@gmail.com",
    amount: 100 * 100,
    publicKey: 'pk_test_910fb6ac978feb766f4418e67340055a45efdfa6',
};


const onSuccess = (reference) => {
  console.log(reference, "succeeded");
  axios.post("http://localhost:3030/verify", {reference}).then((response)=>{
      if(response.data.message === "success"){
          alert("verification successful")
      }
      else{
          alert("something is wrong")
      }
  }).catch((err)=>{
      alert("No network")
  })
};


const onClose = () => {
    alert("weldone")
  console.log('closed')
}

const Payment = () => {

    const initializePayment = usePaystackPayment(config);
    return(
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Pay Now</button>
        </div>
    )
         
}

export default Payment