import './Cards.css'

import React from 'react'

function Cards() {
    return (
        <div className='container'>
            <div className='cardFrame cardFront' >
                <img src='circles.svg'></img>
                <p className='cardNumber'>0000 0000 0000 0000</p>
                <p className='name'>Mr. Avinash Tonde</p>
                <p className='expDate'>12/24</p>

            </div>
            <div className='cardFrame cardBack' >
                <div className='blackStrip'>

                </div>
                <div className='cvvBox'>
                    <p className='cvv'>000</p>
                </div>
                <img src='lines.svg'></img>

            </div>

        </div>
    )
}

export default Cards