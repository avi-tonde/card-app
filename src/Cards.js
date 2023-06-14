import React from 'react'

function Cards(props) {

    return (
        <div className='container'>
            <div className="cardFrame" style={{ backgroundImage: `url("bg.png")` }}>
                <div className='cardFrame cardFront' >
                    <div className=''>
                        {/* {props.cardHolderName ? <img src='circles.svg' alt='circles'></img> : ""} */}
                        <img src='circles.svg' alt='circles'></img>
                        <p className='cardNumber'>{props.cardNumber}</p>
                        <p className='name'>{props.cardHolderName}</p>
                        <p className='expDate'>{props.mm && props.yy ? props.mm + "/" + props.yy : ""}</p>
                    </div>

                </div>
            </div>

            <div className='cardFrame cardBack' >
                <div className='blackStrip'>

                </div>
                <div className='cvvBox'>
                    <p className='cvv'>{props.cvv}</p>
                </div>
                <img src='lines.svg' alt='lines'></img>

            </div>

        </div>
    )
}

export default Cards