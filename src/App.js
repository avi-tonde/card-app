import React, { useState } from "react"
import Cards from './Cards';
import './App.css'

export default function App() {
  const [cardholderName, setCardHolderName] = useState(''); //Set card holder name
  const [cardNumber, setcardNumber] = useState(''); // Set card number
  const [cvv, setCvv] = useState(''); // Set cvv
  const cardexpDate ={mm:"", yy:""};
  const [expDate, setexpDate] = useState(cardexpDate); //Set expDate
  const onChangeDate = (e) => {
    setexpDate({ ...expDate, [e.target.name]: e.target.value});
  }
  const [error, setError] = useState({}); //set error



  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(cardholderName,cardNumber,expDate,cvv));
  }

  const validate = (cardholderName,cardNumber,expDate,cvv) =>{
    const errors = {};
    if (!cardholderName || cardholderName.length <3) {
      errors.name = "Cardholder Name is Required";
    }
    if(!cardNumber || cardNumber.length !== 16 ){
      errors.cardNum = "Enter Valid 16 digit Card Number";
    }
    if(!expDate.mm || expDate.mm>12 || !expDate.yy){
      errors.expDate = "Enter Valid Exp. Date";
    }
    if (!cvv || cvv.length !== 3 ) {
      errors.cvv = "Enter Valid 3 Digit CVV";
    }
    return errors;
  }

  return (

    <div className="main">
      <Cards />
      <div className="left">

      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <span>CardHolder Name</span>
            <input type="text" placeholder="Mr. Ben" onChange={e => setCardHolderName(e.target.value)} />
            <p className="error">{ error.name}</p>
          </div>
          <div className="inputBox">
            <span>Card Number</span>
            <input type="number" placeholder="1234 5678 9123 0000" onChange={e => setcardNumber(e.target.value)} maxLength={16}/>
            <p className="error">{ error.cardNum}</p>
          </div>
          <div className="flexBox">
            <div className="inputBox">
              <span>EXP.DATE (MM/YY)</span>
              <div className="flexBox">
                <input className="expDate" onChange={onChangeDate} type="number" name="mm" value={expDate.mm} id="mm" placeholder="MM" maxLength={2} />
                <input className="expDate" onChange={onChangeDate} type="number" name="yy" value={expDate.yy} id="yy" placeholder="YY" maxLength={2}/>
              </div>
              <p className="error">{ error.expDate}</p>
            </div>

            <div className="inputBox">
              <span>CVV</span>
              <input type="number" placeholder="CVV" onChange={e => setCvv(e.target.value)}  maxLength={3}/>
              <p className="error">{ error.cvv}</p>
            </div>

          </div>

          <input type="submit" value="submit" className="submitBtn" />
        </form>

      </div>
    </div>

  )
}
