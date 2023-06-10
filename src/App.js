import React from "react"
import Cards from './Cards';
import './App.css'



export default function App() {
  return (
  
      <main>
        <Cards />
        <div className="left">                                                                         

        </div>
        <div className="right">
          <form action="">
            <div className="inputBox">
              <span>CardHolder Name</span>
              <input type="text" name="cardholderName" id="" placeholder="Mr. Ben" />
            </div>
            <div className="inputBox">
              <span>Card Number</span>
              <input type="number" name="cardNumber" id="" placeholder="1234 5678 9123 0000" />
            </div>
            <div className="flexBox">
              <div className="inputBox">
                <span>EXP.DATE (MM/YY)</span>
                <div className="flexBox">
                  <input className="expDate" type="number" name="expDate" id="" placeholder="MM" />
                  <input className="expDate" type="number" name="expDate" id="" placeholder="YY" />
                </div>
              </div>

              <div className="inputBox">
                <span>CVV</span>
                <input type="number" name="cvv" id="" placeholder="CVV" />
              </div>

            </div>

            <input type="submit" value="submit" className="submitBtn" />
          </form>

        </div>
      </main>

  )
}
