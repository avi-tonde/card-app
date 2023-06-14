import React, { useState } from "react"
import Cards from './components/Cards/Cards';
import Toast from "./components/Toast/Toast";
import './App.css'


export default function App() {

  const [formValues, setFormValues] = useState({});
  const [error, setError] = useState({}); //set error
  const [printData, setPrintData] = useState();
  const [toast, displayToast] = useState(false);

  const onChangeForm = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(validate(formValues));

    if (Object.keys(formValues).length >= 5) {
      setPrintData(formValues);
      // alert("Card Generated Successfully !");
      displayToast(true);
      setTimeout(() =>{displayToast(false)}, 1500);
    }
  }

  const validate = (data) => {
    const errors = {};

    if (!data.cardHolderName || data.cardHolderName.length < 3) {
      errors.name = "Cardholder Name is Required";
    }
    if (!data.cardNumber || data.cardNumber.length !== 16) {
      errors.cardNum = "Enter Valid 16 digit Card Number";
    }
    if (!data.mm || data.mm > 12 || !data.yy) {
      errors.expDate = "Enter Valid Exp. Date";
    }
    if (!data.cvv || data.cvv.length !== 3) {
      errors.cvv = "Enter Valid 3 Digit CVV";
    }
    return errors;

  }



  return (

    <div className="main">
      <Cards {...printData} />
      <div className="left">

      </div>
      <div className="right">
        <form onSubmit={handleSubmit} >
          <div className="inputBox">
            <span>CardHolder Name</span>
            <input type="text" placeholder="Mr. Ben" onChange={onChangeForm} name="cardHolderName" />
            <p className="error">{error.name}</p>
          </div>
          <div className="inputBox">
            <span>Card Number</span>
            <input type="number" placeholder="1234 5678 9123 0000" onChange={onChangeForm} name="cardNumber" />
            <p className="error">{error.cardNum}</p>
          </div>
          <div className="flexBox">
            <div className="inputBox">
              <span>EXP.DATE (MM/YY)</span>
              <div className="flexBox">
                <input className="expDate" onChange={onChangeForm} type="number" name="mm" placeholder="MM" />
                <input className="expDate" onChange={onChangeForm} type="number" name="yy" placeholder="YY" />
              </div>
              <p className="error">{error.expDate}</p>
            </div>

            <div className="inputBox">
              <span>CVV</span>
              <input type="number" placeholder="CVV" onChange={onChangeForm} name="cvv" />
              <p className="error">{error.cvv}</p>
            </div>

          </div>

          <input type="submit" value="submit" className="submitBtn" />

        </form>

        { toast ? <Toast />  : ""}
      </div>


    </div>

  )
}
